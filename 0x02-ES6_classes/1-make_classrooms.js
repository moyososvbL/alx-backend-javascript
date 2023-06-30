import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = [];

  sizes.forEach((size) => {
    const room = new ClassRoom(size);
    rooms.push(room);
  });

  return rooms;
}

// Test the initializeRooms function
const rooms = initializeRooms();
console.log(rooms);
