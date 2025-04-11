import { Component } from "../components/Charts/LineChart";

export default function Dashboard() {
  return (
    <div>
      <div className="border-red-700 border columns-3 gap-3">
        <Component />
        <Component />
        <Component />
      </div>
    </div>
  );
}
