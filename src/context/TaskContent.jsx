// import { createContext } from "react"

// export const TaskContent = createContext()


// export function TaskContentProvider(prosps) {
//     return (
//         <TaskContent.Provider>
//         <h1>Desde el TaskContent</h1>
//         {prosps.children}
//         </TaskContent.Provider>
//     )
// }

function TaskContent(prosps) {
    return (
        // <TaskContent.provider>
        <TaskContent>
        <h1>Desde el TaskContent</h1>
        {prosps.children}
        </TaskContent>
        // </TaskContent.provider>
    )
}
export default TaskContent