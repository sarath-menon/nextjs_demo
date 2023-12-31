"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/src/components/ui/badge"
import { Checkbox } from "@/src/components/ui/checkbox"

import { labels, types, statuses } from "./constants"
import { taskSchema, Task } from "./schema"
import { DataTableColumnHeader } from "@/src/app/(routes)/(main)/_components/datatable_common/data-table-column-header"
import { DataTableRowActions } from "../../_components/datatable_v1/data-table-row-actions"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ViewReqDialog } from "../../_components/dialogs/req_viewer"

export const taskColumns: ColumnDef<Task>[] = [

  // checkbox
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // // Req number
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  // Req nature
  {
    accessorKey: "label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nature" />
    ),
    cell: ({ row }) =>
      <div className="w-[50px]">
        <Badge variant="outline">
          {row.getValue("label")}
        </Badge>
      </div>,
    enableSorting: false,
    enableHiding: false,
  },


  // Req description
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),

    cell: ({ row }) =>
      <div className="flex space-x-2">

        {/* Req description */}
        <span className="max-w-[400px] overflow-x-clip font-medium">
          <ViewReqDialog name={row.getValue("title")} />
        </span>

      </div>
  },

  // // Req type
  // {
  //   accessorKey: "type",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Type" />
  //   ),
  //   cell: ({ row }) => <div className="w-[60px]">{row.getValue("type")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  // Status
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  // Type
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find(
        (type) => type.value === row.getValue("type")
      )

      if (!type) {
        return null
      }

      return (
        <div className="flex items-center">
          {/* {type.icon && (
            <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{type.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  // 3-dot menu
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} schema={taskSchema} />,
  },
]
