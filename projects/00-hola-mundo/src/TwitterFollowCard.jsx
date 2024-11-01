export function TwitterFollowCard({userName,name,isFollowing}){
    const imgaSrc= `https://unavatar.io/${userName}`
    return(


        <article className="tw-followCard"> 
        <header className="tw-followCard-header">

            <img alt="El avatar de midudev" src= {imgaSrc} className="tw-followCard-img"/ >
            <div className="tw-followCard-info">

                <strong>{name}</strong>
                <span className="tw-followCard-infoUsername"> {userName} </span>
            </div>
        </header>

        <aside >
            <button className="tw-followCard-button">
            
                Seguir
            </button>

        </aside>

    </article>
    )
}