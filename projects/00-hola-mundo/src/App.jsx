import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){
    const addAt= (userName)
    return (
        <section className="App">
        
        <TwitterFollowCard isFollowing={true} userName="leosaballos " name="Leonel " />
        <TwitterFollowCard userName="naavi " name="Nahomi Aviles " />
        <TwitterFollowCard isFollowing={false} userName="raque " name="Ashley Raquel " />
        <TwitterFollowCard userName="midudev " name="Leonel " />
        <TwitterFollowCard userName="leosaballos " name="Leonel " />
        <TwitterFollowCard userName="leosaballos " name="Leonel " />
        </section>
    )
}