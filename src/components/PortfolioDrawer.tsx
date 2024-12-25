import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Settings, Upload } from "lucide-react"

export function PortfolioDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Settings className="w-5 h-5"/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Portfolio Settings</SheetTitle>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </SheetDescription>
        </SheetHeader>
       <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Route:</label>
              <p className="text-sm text-blue-500">/deep</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Route:</label>
              <p className="text-sm text-blue-500">/deep</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full py-5"
              onClick={() => console.log('Log out')}
            >
              <span className="i-lucide-log-out h-4 w-4 gap-x-2 " />
              <Upload className="inline-block rotate-90"/>
              Log Out
            </Button>
            
            <Button 
              variant="destructive" 
              className="w-full py-5"
              onClick={() => console.log('Delete portfolio')}
            >
              Delete Portfolio
            </Button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
           
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
