import React, { useState } from "react";

function Filtering() {
  const [roomType, setRoomType] = useState("all");
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(600);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(1000);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterData = {
      roomType,
      guests,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    };
    console.log("Filter values:", filterData);
    // Burada istəsən API-yə göndərə bilərsən və ya otaqları filtr edə bilərsən
  };
  return (
    <form onSubmit={handleSubmit} className="room-filter-form">
      {/* Room Type */}
      <label>
        Room Type
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="all">All</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
        </select>
      </label>

      {/* Guests */}
      <label>
        Guests
        <select
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      {/* Room Price */}
      <label>
        Room Price ${price}
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </label>

      {/* Room Size */}
      <label>
        Room Size
        <input
          type="number"
          placeholder="Min"
          value={minSize}
          onChange={(e) => setMinSize(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxSize}
          onChange={(e) => setMaxSize(parseInt(e.target.value))}
        />
      </label>

      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          checked={breakfast}
          onChange={(e) => setBreakfast(e.target.checked)}
        />
        Breakfast
      </label>
      <label>
        <input
          type="checkbox"
          checked={pets}
          onChange={(e) => setPets(e.target.checked)}
        />
        Pets
      </label>

      <button className="" type="submit">
        Filter
      </button>
    </form>
  );
}

export default Filtering;
