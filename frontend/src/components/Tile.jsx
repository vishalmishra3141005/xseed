

export default function Tile({title, videoLink}) {
    return (
        <div className="tile-container">
            <div>{title}</div>   

            <div>Learn</div>

            <div className="link-container">
                <ul>
                { videoLink.map(function(link) {
                    return (
                        <li><a className="link-style" href={link[1]}>{link[0]}</a></li>
                    );
                })}
                </ul>
            </div>
            
        </div>

    );
}