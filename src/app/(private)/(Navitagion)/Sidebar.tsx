import Link from "next/link";

const menuItems = [
   {
      title: "PRINCIPAL",
      items: [
         { label: "Dashboard", href: "/dashboard" },
      ]
   }
]

export function Sidebar() {
   return (
      <aside className="w-56 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 pt-6 px-4 hidden lg:flex lg:flex-col">
         <div className="flex justify-center items-center mb-8">
          <span className="text-xl font-bold text-primary">ALTERRA</span>
        </div>
         <nav className="flex-1">
            {
               menuItems.map((section) => (
                  <div key={section.title} className="mb-6">
                     <h2 className="text-xs font-semibold text-gray-400 mb-2">{section.title}</h2>

                     <ul className="space-y-1">
                        {section.items.map((item) => (
                           <li key={item.label}>
                              <Link
                                 href={item.href}
                                 className="text-sm text-gray-300 hover:text-primary hover:bg-gray-800/50 rounded-lg px-3 py-2 block transition-colors"
                              >
                                 {item.label}
                              </Link>
                           </li>
                        ))}
                     </ul>

                  </div>
               ))
            }
         </nav>
      </aside>
   )
}