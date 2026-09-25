# 🏋️ FITLOG — Workout Library

> **Train with intent. Log every set.**

FITLOG is a modern workout library web application built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**. It helps users explore exercises, build a personalized workout plan, save exercises for later, and track completed workouts through a clean and responsive interface.

---

## 🌐 Live Demo

🔗 **Live Website:** `https://fit-log-app-two.vercel.app`

🔗 **GitHub Repository:** `https://github.com/montasir132/Fit-Log-App`

> Replace the links above with your actual Vercel and GitHub URLs.

---

## 📸 Project Overview

FITLOG provides a simple way to discover exercises and organize them into a personal workout plan.

Users can browse the workout library, view detailed exercise information, add exercises to today's plan, save exercises for later, and mark completed exercises as done.

The application is designed with a dark fitness-focused UI and a responsive layout that works across desktop, tablet, and mobile devices.

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse a collection of exercises with useful information such as:

* Exercise name
* Equipment
* Duration
* Calories burned
* Rating
* Exercise image

---

### 2. 📋 Personal Workout Plan

Users can create their own **Today's Plan** by adding exercises from the workout library.

The plan can be managed directly from the **My Plan** page.

---

### 3. 🔖 Save Exercises for Later

Users can save exercises that they don't want to add immediately to today's workout.

Saved exercises can later be moved into the workout plan.

---

### 4. ✅ Workout Progress Actions

Users can manage their exercises with simple actions:

* Mark an exercise as completed
* Remove an exercise from today's plan
* Remove saved exercises
* Move saved exercises to today's plan

Toast notifications provide feedback after user actions.

---

### 5. 📊 Sorting & Responsive UI

The My Plan page includes sorting options for:

* Duration
* Calories Burned
* Rating

The entire application is responsive and adapts to:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

---

## 🛠️ Technologies Used

| Technology             | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| **Next.js**            | Build the application UI and handle rendering |
| **Next.js App Router** | Page navigation and dynamic routing           |
| **TypeScript**         | Type-safe development                         |
| **Tailwind CSS**       | Styling and responsive layouts                |
| **DaisyUI**            | UI components and utility classes             |
| **React**              | Component-based UI development                |
| **React Icons**        | Icons throughout the application              |
| **React Toastify**     | User action notifications                     |

---

## 📁 Project Structure

```text
src/
├── app/
|   ├── [id]/
|   |   └── page.tsx
│   ├── page.tsx
│   ├── my-plan/
|   |   ├── loading.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   └── not-found
│
├── components/
|   ├── universal/
│   |   ├── footer.tsx
|   |   └── Navigation.tsx
│   ├── myPlan/
│   |   ├── counter.tsx
│   |   ├── myPlanCard.tsx
|   |   └── myPlanHeader.tsx
│   ├── workouts/
│   |   ├── exerciseLibCard.tsx
│   |   ├── ExerciseLibDetailsCard.tsx
|   |   └── Library.tsx
|   ├── api/
|   |   └── apiFetch.tsx
|   └── btnInteraction/
│   |   ├── addTodayPlanBtn.tsx
|   |   └── saveForLaterBtn.tsx
│
├── context/
│   └── exerciseContext.tsx
│
└── types/
    ├── exerciseType.ts
    └── ExerciseContextType.ts

```

---

## 🔄 Main User Flow

```text
                         🏋️ FITLOG
                            │
                            ▼
                    🏠 Workout Library
                            │
                            ▼
                    Browse Exercises
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        View Details    Add to Plan    Save for Later
             │              │              │
             ▼              ▼              │
      Exercise Details   Today's Plan ◄────┘
                            │
                            ▼
                       📋 My Plan
                            │
                  ┌─────────┴─────────┐
                  │                   │
                  ▼                   ▼
             Today's Plan          Saved
                  │                   │
          ┌───────┴───────┐           │
          │               │           │
          ▼               ▼           ▼
       Mark Done        Remove    Add to Plan
          │               │           │
          ▼               │           │
    Completed Toast       │           │
                          │           │
                          └───────────┘

---

## 📱 Responsive Design

FITLOG is designed to provide a consistent experience across different screen sizes.

### Mobile

* Stacked workout cards
* Responsive navigation
* Touch-friendly buttons
* Flexible statistics and actions

### Tablet

* Adaptive card layouts
* Responsive spacing
* Flexible content sections

### Desktop

* Horizontal workout cards
* Full navigation
* Spacious layout
* Optimized workout management interface

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/montasir132/Fit-Log-App.git
```

Go to the project directory:

```bash
cd Fit-Log-App
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🎨 Design

FITLOG uses a dark fitness-inspired interface with a bright lime-green accent color.

### Color Palette

| Color     | Usage           |
| --------- | --------------- |
| `#0D0F12` | Main background |
| `#191C21` | Cards           |
| `#292D34` | Borders         |
| `#C2F800` | Primary accent  |
| `#FFFFFF` | Main text       |
| `#9CA3AF` | Secondary text  |

---

## 📌 Project Goals

The main goals of FITLOG are:

* Practice **Next.js App Router**
* Build reusable React components
* Work with TypeScript interfaces and props
* Practice state management with React Context
* Build responsive layouts using Tailwind CSS
* Create a practical real-world project

---