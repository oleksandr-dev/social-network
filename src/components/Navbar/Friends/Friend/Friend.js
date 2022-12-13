import styles from "./Friend.module.css";


const Friend = (props) => {

    let noPhoto = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwsPDw4NEBANDQ0NDgoNDw0NCg8NDg0OFREWFhURFRMYHSggGBoxGxUTITEhJSkrLi4uFx8zODM2NyguLjcBCgoKDQ0NDg0ODisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQUEAwIH/8QALxABAAEDAgMHAgYDAAAAAAAAAAECAxEEITFBURIiMmFxkbEF0UJygYKhwVJi8f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/VEFVEFAQUBBQEFAQUBBQEFAQUBBQEFAQUBBQEFARQBFRQAAAAAAAAAAAAAAAAAAAAAAAAAAAARUUAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVFAAAAAAAAAB43NRRTtM79I3kHsk1RHSPWcM69q654d2PLi559/UGxFdPWPeH0xMPSm7XHCqfcGuM2jWVxx70ebts36a+HHpzB6gAAAAAAAAAAAiooAAAAAAAOXX3cRFMfi+Aeeq1X4aZ9avs4wUAAAAFpmYnMbT1QBqaa924844x/b2ZWmudmqJ5TtPo1UAAAAAAAAAAEVFAAAAAAAZerr7Vc9I7rTmcRnpuxgAFAAAAAABraerNFM/6x9mS1NL4KfT+0HsAAAAAAAAACKigAAAAAA87/AIavy1fDJa1/wVflq+GSAAoAAAAAANPReCn93yzGlovBT+75QdAAAAAAAAAAIqKAAAAAADj192qMUxtExOXC7PqMb0z6uMABQAAAAAAdehu1Z7HLE7dHI6NBHf8ASJQaQAAAAAAAAAIqKAAAAAADm19Oac9JhnNiumJiYnhMYlm6mx2Mb5ic8geICgAAAAAA7fp1Piq9Ic1i125xnG2c4adq3FMRTHL+UH2AAAAAAAAACKigAAAAAAPDV2+1TPWN4e4DFHvq7PZnMeGrePKejwUAAAAAeli1Nc45c58gdegt4p7X+Xw60iIjaOEbKgAAAAAAAAAAiooAAAAAAAIDx1sdyfLEsxpa6qIomOc4ZoACgAA7/p8d2Z6y4Hd9OqjExzyg7BFAAAAAAAAAABFRQAAAABHnc1FFPGd+kbyD0cus1FVMxTG2Yznm87uumfDGPOd5ctVUzOZnM+YJMzO87z5gKAAAABAA7NJqK5mKZ34784dzFiZjeNpdNrW1Rx70e0oNEeFvVW6ueJ6Ts9gUAAAAAAAEVFAHzXXFMZnaIZ1/VVVcO7T0B3XL9FPGd+kby5rmu/xj9Z+zjAeld+urjM+kbQ8wUAAAAAAAAAAAAH3Rdrp4TMeXJ8AOu3rp/FET6TifZ029Tbq54npOzLEGyrKs366eG8dJaNq5FUZj/k9AegAAAIqAOH6hc3ijlG8uR6amc11T549tnmoAAAAAAAAAAAAAAAAAAAAPfRXMVY5VbfryeC0ziYnpMT/INkRUAAEFAZF/xVfmq+XwCgAAAAAAAAAAAAAAAAAAAAADZUEAAH//2Q=="
    let photo = props.img ? props.img : noPhoto

    return (

        <div className={styles.friend}>
            <div>
                <img src={photo}/>
            </div>

            <div className={styles.name}>
                {props.name}
            </div>
        </div>

    )
}

export default Friend