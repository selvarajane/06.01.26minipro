import './NumberFilter.css'

function NumberFilter() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  // Filter to show only even numbers
  const evenNumbers = numbers.filter((num) => num % 2 === 0)

  return (
    <div className="number-filter-container">
      <h2>Number Filter</h2>
      <p className="description">Displaying only even numbers:</p>
      <div className="number-list">
        {evenNumbers.map((number) => (
          <span key={number} className="even-number">
            {number}
          </span>
        ))}
      </div>
    </div>
  )
}

export default NumberFilter

