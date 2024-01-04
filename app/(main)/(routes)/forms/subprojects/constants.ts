import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const labels = [
    {
      value: "scientific",
      label: "Scientific",
    },
    {
      value: "engineering",
      label: "Engineering",
    },
    {
      value: "mixed",
      label: "Mixed",
    },
  ]
  
  export const types = [
    {
      value: "master_thesis",
      label: "Master thesis",
    },
    {
      value: "semester_project",
      label: "Semester project",
    },
  ]
  
  export const statuses = [
  
    {
      value: "starting soon",
      label: "Starting soon",
      icon: CircleIcon,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: StopwatchIcon,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
    },
  ]