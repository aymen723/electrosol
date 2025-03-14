import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export const Settings = () => {
  return (
    <div>
      <div>
        <div>language</div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Languages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Arabic</SelectItem>
            <SelectItem value="dark">English</SelectItem>
            <SelectItem value="system">French</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <div>language</div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Languages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Arabic</SelectItem>
            <SelectItem value="dark">English</SelectItem>
            <SelectItem value="system">French</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
