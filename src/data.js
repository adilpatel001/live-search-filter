const users = [];

const firstNames = [
  "Adil","Aman","Rohit","Rahul","Priya","Sneha","Ankit","Neha","Karan","Pooja",
  "Arjun","Simran","Vikas","Nisha","Mohit","Riya","Sahil","Aarti","Manish","Ishita"
];

const lastNames = [
  "Khan","Verma","Sharma","Mehta","Singh","Patel","Gupta","Joshi","Malhotra","Yadav",
  "Rao","Kaur","Jain","Kapoor","Agarwal","Choudhary","Bansal","Mishra","Tiwari","Roy"
];

for (let i = 0; i < 1000; i++) {
  const first = firstNames[i % firstNames.length];
  const last = lastNames[(i * 7) % lastNames.length];
  users.push(`${first} ${last} ${i + 1}`);
}

export default users;
