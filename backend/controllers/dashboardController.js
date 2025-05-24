export const getOverview = (req, res) => {
  res.json({
    total_revenue: 120000,
    total_users: 5800,
    active_users: 1350,
  });
};

export const getCharts = (req, res) => {
  const { range, type } = req.query;
  res.json({
    type,
    range,
    data: [100, 200, 300, 400, 500],
  });
};

export const getActiveByCountry = (req, res) => {
  const { limit } = req.query;
  const countries = [
    { country: "USA", active_users: 500 },
    { country: "India", active_users: 400 },
    { country: "UK", active_users: 300 },
    { country: "Canada", active_users: 250 },
    { country: "Germany", active_users: 200 },
  ];
  res.json(limit ? countries.slice(0, Number(limit)) : countries);
};

export const getRevenue = (req, res) => {
  res.json({
    daily: 4000,
    weekly: 25000,
    monthly: 100000,
    change: "+5%",
  });
};

export const getActiveUsers = (req, res) => {
  res.json({ active_users: 1350 });
};

export const getRegisteredUsers = (req, res) => {
  res.json({
    total_users: 5800,
    premium_users: 1200,
    free_users: 4600,
  });
};

export const getMostActiveUsers = (req, res) => {
  res.json([
    { name: "Alice", avatar: "👩", activity_score: 98 },
    { name: "Bob", avatar: "🧑", activity_score: 95 },
    { name: "Charlie", avatar: "👨", activity_score: 92 },
  ]);
};

export const getModuleEngagements = (req, res) => {
  const { category } = req.query;
  res.json({
    modules: [
      { name: "Swipes", usage: "35%", score: 85 },
      { name: "Reels", usage: "25%", score: 80 },
      { name: "Chat", usage: "20%", score: 75 },
      { name: "Events", usage: "15%", score: 70 },
      { name: "Others", usage: "5%", score: 60 },
    ],
    category,
  });
};

export const getActiveUserList = (req, res) => {
  const { page = 1, limit = 10, sort = "hearts", order = "desc" } = req.query;
  const users = Array.from({ length: 50 }, (_, i) => ({
    user_id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@example.com`,
    gender: i % 2 === 0 ? "male" : "female",
    hearts: Math.floor(Math.random() * 100),
    joined_date: `2023-09-${(i % 30) + 1}`,
  }));

  const sorted = users.sort((a, b) => {
    if (order === "asc") return a[sort] > b[sort] ? 1 : -1;
    else return a[sort] < b[sort] ? 1 : -1;
  });

  const start = (page - 1) * limit;
  const paginated = sorted.slice(start, start + Number(limit));
  res.json({ page, limit: Number(limit), results: paginated });
};
