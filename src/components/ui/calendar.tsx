import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      mode="range"
      className={cn("p-4 bg-black text-white rounded-lg", className)}
      classNames={{
        months: "flex",
        month: cn("flex flex-col",),
        caption: "",
        caption_label: "text-white",
        nav: "",
        nav_button: cn(
          buttonVariants({ variant: "gray" }),
          ""
        ),
        table: "",
        head_row: "",
        head_cell: "",
        row: "",
        cell: "",
        day: cn(
          buttonVariants({ variant: "transparent" }),
          "w-10 h-10 p-0 font-normal text-white hover:bg-gray-800 rounded-md"
        ),
        day_selected: "",
        day_range_start: "",
        day_range_end: "",
        day_range_middle: "",
        day_today: "",
        day_outside: "",
        day_disabled: "",
        ...classNames,
      }}
      components={{
        Button: ({ name, ...props }) => (
          <button {...props} className="p-2">
            {name === "next" ? (
              <ChevronRight className="h-5 w-5 text-white" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-white" />
            )}
          </button>
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
