# Year 11 AIT ATAR Course

An online course application aligned to the SCSA Year 11 AIT ATAR syllabus for Unit 1 and Unit 2.

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/11-ait-atar-course.git
cd 11-ait-atar-course
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and add your Supabase credentials:

```bash
cp .env.example .env
```

Open `.env` and paste your Supabase project URL and anon key:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Set up Supabase

Create a table called `progress` in your Supabase project with the following SQL:

```sql
create table progress (
  id uuid default gen_random_uuid() primary key,
  username text not null,
  module_id integer not null,
  status text not null default 'not_started',
  quiz_score integer,
  self_mark integer,
  updated_at timestamptz default now(),
  unique(username, module_id)
);

-- Enable Row Level Security
alter table progress enable row level security;

-- Allow all operations for anon key (students don't log in)
create policy "Allow all for anon" on progress
  for all using (true) with check (true);
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:5173/11-ait-atar-course/](http://localhost:5173/11-ait-atar-course/)

### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch.

> **Note:** GitHub Pages deployment requires:
> - The repository must be **public**
> - GitHub Pages must be enabled: go to **Settings > Pages > Source** and select the **gh-pages** branch
> - After deploying, your site will be live at `https://YOUR_USERNAME.github.io/11-ait-atar-course/`

## Tech Stack

- Vite + React 18
- Tailwind CSS v3
- react-router-dom v6
- @supabase/supabase-js

## Features

- Unit 1 & Unit 2 content with 10 modules
- Four-tab module structure: Lesson, Quiz, Practice Questions, Exam Practice
- Progress tracking synced to Supabase (no login required — uses a username)
- Teacher dashboard with PIN protection and student progress export
- Exam practice hub, glossary, and command words reference pages
- Fully mobile responsive
