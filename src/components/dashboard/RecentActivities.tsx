import React from "react";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "../ui/card";

type Props = {};

const RecentActivities = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recent Activities</CardTitle>
        <CardDescription>You have played total of 7 games</CardDescription>
      </CardHeader>
      <CardContent className="max-g-[580px] overflow-scroll">
        Histories
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
