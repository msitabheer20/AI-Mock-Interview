import { Button } from "@/components/ui/button";
import { History } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav className="flex items-center justify-between">
                <div className="flex flex-col max-w-lg">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={38}
                        height={32}
                    />
                    <h2 className="text-primary-100">Mock Interview</h2>
                </Link>
                <p className="text-primary-100 ml-12">
                    Practice on real interview questions and get instant feedback.
                </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                    <History className="w-4 h-4 mr-2" />
                        Interview History
                        </Button>
                    <Button variant="default">
                        Create Custom Mock Interview
                    </Button>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default RootLayout;