import './GreetingMessage.css'

function GreetingMessage() {
  const getCurrentHour = () => {
    return new Date().getHours()
  }

  const hour = getCurrentHour()

  // Multiple return conditions based on time of day
  if (hour >= 5 && hour < 12) {
    return (
      <div className="greeting-container morning">
        <h2>Good Morning! ☀️</h2>
        <p>Have a wonderful day ahead!</p>
      </div>
    )
  }

  if (hour >= 12 && hour < 17) {
    return (
      <div className="greeting-container afternoon">
        <h2>Good Afternoon! 🌤️</h2>
        <p>Hope you're having a great day!</p>
      </div>
    )
  }

  if (hour >= 17 && hour < 21) {
    return (
      <div className="greeting-container evening">
        <h2>Good Evening! 🌆</h2>
        <p>Enjoy your evening!</p>
      </div>
    )
  }

  return (
    <div className="greeting-container night">
      <h2>Good Night! 🌙</h2>
      <p>Have a peaceful rest!</p>
    </div>
  )
}

export default GreetingMessage

