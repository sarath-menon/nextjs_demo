"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/src/components/ui/badge"
import { Checkbox } from "@/src/components/ui/checkbox"

import { labels, types, statuses } from "../../../data/data"
import { Task, objectiveSchema } from "../../../data/schema"
import { DataTableColumnHeader } from "../../../_components/datatable_common/data-table-column-header"
import { DataTableRowActions } from "../../../_components/datatable_v2/data-table-row-actions"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ViewReqDialog } from "../../../_components/dialogs/req_viewer"
import { cn } from "@/lib/utils"

export const objectiveColumns: ColumnDef<Task>[] = [

  // Req description
  // {
  //   accessorKey: "title",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),

  //   cell: ({ row }) =>
  //     <div className="flex space-x-2">

  //       {/* Req description */}
  //       <button
  //         key={row.getValue("id")}
  //         className={cn(
  //           "flex flex-col items-start gap-2 rounded-lg  p-3 text-left text-sm transition-all"
  //         )}
  //       >

  //         {/* Title and Subtitle */}
  //         <div className="flex w-full flex-col gap-1">
  //           <div className="flex items-center">

  //             {/* Title */}
  //             <div className="flex items-center gap-2">

  //               <div className="font-semibold">
  //                 {/* <SubprojectViewDialog name={item.name} /> */}
  //                 {row.getValue("title")}
  //                 {/* Project title */}
  //               </div>

  //               {!row.getValue("title") && (
  //                 <span className="flex h-2 w-2 rounded-full bg-blue-600">

  //                 </span>
  //               )}
  //             </div>

  //             {/* <div
  //                 className={cn(
  //                   "ml-auto text-xs",
  //                   subproject.selected === item.id
  //                     ? "text-foreground"
  //                     : "text-muted-foreground"
  //                 )}
  //               >
  //                 {formatDistanceToNow(new Date(item.date), {
  //                   addSuffix: true,
  //                 })}
  //               </div> */}
  //           </div>

  //           {/* Subtitle */}
  //           {/* <div className="text-xs font-medium">
  //             {row.getValue("type")}
  //           </div> */}

  //           {/* Absract */}
  //           <div className="line-clamp-2 text-xs text-muted-foreground">
  //             Whenever there's an error observed in dynamically fetching helper JavaScript files known as Chunks, a ChunkLoad Error is thrown.
  //             {row.getValue("title")}
  //           </div>

  //         </div>

  //         {/* Badges */}
  //         {/* <div className="flex items-center gap-2">
  //           <Badge variant="outline">
  //             {row.getValue("type")}
  //           </Badge>

  //           <Badge variant="outline">
  //             {row.getValue("label")}
  //           </Badge>

  //           <Badge variant="outline">
  //             {row.getValue("status")}
  //           </Badge>
  //         </div> */}

  //       </button >
  //       {/* <ViewReqDialog name={row.getValue("title")} /> */}



  //     </div >
  // },

  // // Status
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       (status) => status.value === row.getValue("status")
  //     )

  //     if (!status) {
  //       return null
  //     }

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         {status.icon && (
  //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{status.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },

  // // Type
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

  // Nature
  {
    accessorKey: "nature",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nature" />
    ),
    cell: ({ row }) => {
      const nature = natures.find(
        (nature) => nature.value === row.getValue("nature")
      )

      if (!nature) {
        return null
      }

      return (
        <div className="flex items-center">
          {/* {label.icon && (
              <label.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )} */}
          <span>{nature.label}</span>
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
    cell: ({ row }) => <DataTableRowActions row={row} schema={objectiveSchema} />,
  },
]
