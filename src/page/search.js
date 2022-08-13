import React, { useState } from 'react'

import './search.style.scss'

const results = [
  {
    name: '정신영',
    age: 12,
  },
  {
    name: '민보람',
    age: 10,
  },
]

export default function SearchPage() {
  const [selected, setSelected] = useState()
  const [founds, setFounds] = useState([])

  return (
    <div className="search-container">
      <div className="searchbar-wrapper">
        <input
          className="search-bar"
          type="text"
          onChange={(e) => {
            if (e.target.value === '') {
              setFounds([])
            } else {
              setFounds(results)
            }
          }}
        />
        {founds.length > 0 && (
          <div className="search-result-wrapper">
            {founds.map((found) => (
              <SearchResult
                primary={found.name}
                secondary={found.age}
                onClose={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const SearchResult = ({ primary, secondary, onClose }) => {
  return (
    <div className="sr-container">
      <div className="sr-primary">{primary}</div>
      <div className="sr-secondary">{secondary}</div>
    </div>
  )
}
