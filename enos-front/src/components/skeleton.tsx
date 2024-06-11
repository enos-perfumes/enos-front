import { Loader } from "lucide-react";

export function AppLoader() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Loader className="w-20 h-20 text-primary animate-spin" />
        </div>
    );
}