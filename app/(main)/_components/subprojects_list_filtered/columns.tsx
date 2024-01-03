"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, types, statuses } from "../../data/data"
import { Task } from "../../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ViewReqDialog } from "../req_viewer"
import { cn } from "@/lib/utils"

export const columnsV2: ColumnDef<Task>[] = [

  // checkbox
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  // Req number
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
  // {
  //   accessorKey: "label",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Nature" />
  //   ),
  //   cell: ({ row }) =>
  //     <div className="w-[50px]">
  //       <Badge variant="outline">
  //         {row.getValue("label")}
  //       </Badge>
  //     </div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },


  // Req description
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),

    cell: ({ row }) =>
      <div className="flex space-x-2">

        {/* Req description */}
        <button
          key={row.getValue("id")}
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg  p-3 text-left text-sm transition-all"
          )}
        >


          {/* Title and Subtitle */}
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">

              {/* Title */}
              <div className="flex items-center gap-2">

                <div className="font-semibold">
                  {/* <SubprojectViewDialog name={item.name} /> */}
                  {/* {row.getValue("title")} */}
                  Project title
                </div>

                {!row.getValue("title") && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600">

                  </span>
                )}
              </div>

              {/* <div
                  className={cn(
                    "ml-auto text-xs",
                    subproject.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div> */}
            </div>

            {/* Subtitle */}
            <div className="text-xs font-medium">
              {/* {row.getValue("title")} */}
              Type of thesis
            </div>

            {/* Absract */}
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {/* {item.text.substring(0, 300)} */}
              {row.getValue("title")}
            </div>

          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline">
              selva
            </Badge>
          </div>


        </button >
        {/* <ViewReqDialog name={row.getValue("title")} /> */}



      </div >
  },

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
  // {
  //   accessorKey: "type",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Type" />
  //   ),
  //   cell: ({ row }) => {
  //     const type = types.find(
  //       (type) => type.value === row.getValue("type")
  //     )

  //     if (!type) {
  //       return null
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {/* {type.icon && (
  //           <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )} */}
  //         <span>{type.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },

  // 3-dot menu
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
