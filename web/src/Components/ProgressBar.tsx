interface ProgresseBarProps{
    progess: number
}
export function ProgresseBar(props:ProgresseBarProps){
    const progresStyles={
        width: `${props.progess}%`
    }
    return(
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
                    <div 
                        role="Progressebar"
                        aria-label="Progresso de hábitos completados nesse dia"
                        aria-valuenow={props.progess}
                        style={progresStyles }
                        className="h-3 rounded-xl bg-violet-600 w-3/4"></div>
                </div>
    )
}