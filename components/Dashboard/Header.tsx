import { Server, User, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm">
            <div className="flex h-16 items-center justify-between px-6">
                {/* Logo and Title - Right Side */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
                        <Server className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-white">سامانه Software Suite</h2>
                        <p className="text-slate-400">پلتفرم مدیریت نرم افزار</p>
                    </div>
                </div>

                {/* User Info and Actions - Left Side */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <Bell className="h-5 w-5" />
                    </Button>

                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <Settings className="h-5 w-5" />
                    </Button>

                    <div className="flex items-center gap-3 pr-4 border-r border-slate-700">
                        <div className="text-left">
                            <p className="text-white">علی احمدی</p>
                            <p className="text-slate-400">شرکت فناوری نوین</p>
                        </div>
                        <Avatar className="h-10 w-10 bg-gradient-to-br from-orange-500 to-orange-600">
                            <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                                <User className="h-5 w-5" />
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    );
}
