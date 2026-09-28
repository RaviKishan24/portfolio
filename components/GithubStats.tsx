"use client";

import { useEffect, useState } from "react";
import { Calendar, GitBranch, GitCommit, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

interface Props {
  username: string;
}

interface Contribution {
  count: number;
  date: string;
}

interface GithubStats {
  user: {
    totalContribution: number;
  };
  contributions: Contribution[];
}

const GithubStats = ({ username }: Props) => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/github?username=${encodeURIComponent(username)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch GitHub stats");
        }

        setStats(data);
      } catch (error) {
        console.error("GitHub stats error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch GitHub stats"
        );
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGithubStats();
    }
  }, [username]);
 

  // Loading state
  if (loading) {
    return (
      <Card className="border-border/50 bg-card p-4 sm:p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-5 w-3/4 rounded bg-muted" />
          <div className="h-8 rounded bg-muted" />
          <div className="h-32 rounded bg-muted" />
        </div>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className="border-border/50 bg-card p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <GitCommit className="h-5 w-5 text-destructive" />

          <div>
            <p className="font-medium text-destructive">
              Failed to load GitHub stats
            </p>

            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </div>
      </Card>
    );
  }

  if (!stats) {
    return null;
  }

  /**
   * Calculate current streak.
   *
   * We start from the latest day and move backwards.
   * As soon as we find a day with 0 contributions,
   * the current streak ends.
   */
  const calculateCurrentStreak = () => {
    let streak = 0;

    for (let i = stats.contributions.length - 1; i >= 0; i--) {
      if (stats.contributions[i].count === 0) {
        break;
      }

      streak++;
    }

    return streak;
  };

  const currentStreak = calculateCurrentStreak();

  /**
   * Find the highest number of contributions
   * made on a single day.
   */
  const maxContributions =
    stats.contributions.length > 0
      ? Math.max(...stats.contributions.map((day) => day.count))
      : 0;

  /**
   * Get contribution box color.
   */
  const getContributionLevel = (count: number) => {
    if (count === 0) {
      return "bg-muted";
    }

    if (maxContributions === 0) {
      return "bg-muted";
    }

    const percentage = (count / maxContributions) * 100;

    if (percentage <= 25) {
      return "bg-primary/30";
    }

    if (percentage <= 50) {
      return "bg-primary/50";
    }

    if (percentage <= 75) {
      return "bg-primary/70";
    }

    return "bg-primary";
  };

  // Last 30 days
  const last30Days = stats.contributions.slice(-30);

  return (
    <Card className="overflow-hidden border-border/50 bg-card p-4 backdrop-blur-sm sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2">
            <GitCommit className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
          </div>

          <h3 className="text-lg font-semibold sm:text-xl">
            Contribution Activity
          </h3>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {/* Current Streak */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg bg-secondary/50 p-4 backdrop-blur-sm"
          >
            <Calendar className="mb-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />

            <p className="text-sm text-muted-foreground">
              Current Streak
            </p>

            <p className="text-xl font-bold text-primary sm:text-2xl">
              {currentStreak} days
            </p>
          </motion.div>

          {/* Total Contributions */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg bg-secondary/50 p-4 backdrop-blur-sm"
          >
            <GitBranch className="mb-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />

            <p className="text-sm text-muted-foreground">
              Total Contributions
            </p>

            <p className="text-xl font-bold sm:text-2xl">
              {stats.user.totalContribution.toLocaleString()}
            </p>
          </motion.div>

          {/* Best Day */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-lg bg-secondary/50 p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
          >
            <Star className="mb-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />

            <p className="text-sm text-muted-foreground">
              Best Day
            </p>

            <p className="text-xl font-bold sm:text-2xl">
              {maxContributions} contributions
            </p>
          </motion.div>
        </div>

        {/* Contribution Calendar */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Last 30 days
          </h4>

          <div className="overflow-x-auto pb-4">
            <div className="flex min-w-150 gap-1">
              <TooltipProvider>
                {last30Days.map((day, index) => (
                  <motion.div
                    key={day.date}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.02,
                    }}
                  >
                    <Tooltip>
                      <TooltipTrigger >
                        <div
                          className={cn(
                            "h-6 w-6 cursor-pointer rounded-sm transition-all duration-200 hover:scale-110 sm:h-8 sm:w-8",
                            getContributionLevel(day.count)
                          )}
                        />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p className="text-xs font-semibold">
                          {day.count}{" "}
                          {day.count === 1
                            ? "contribution"
                            : "contributions"}{" "}
                          on{" "}
                          {new Date(day.date).toLocaleDateString(
                            undefined,
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default GithubStats;