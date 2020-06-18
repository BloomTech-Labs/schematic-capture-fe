import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchers } from "../../shared/actions/dashboardActions";
import 

import { ActivityList, ActivityTime, ActivityCard } from "../Styles/Dashboard/index";
const { fetchActivities } = dispatchers;

const Activity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.dashboard.activities);

  console.log(activities, "ACTIVITY!");

  useEffect(() => {
    dispatch(fetchActivities());
  }, []);
  return (
    <div>
     
        {activities.map((activity) => (
          <ActivityCard>
            <ActivityList>{activity.action}</ActivityList>
            <ActivityTime>{activity.timestamp}</ActivityTime>
            </ActivityCard>
        ))}
   
    </div>
  );
};
export default Activity;
