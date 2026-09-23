# Dev Stack Builder

Dev Stack Builder is a responsive React application where users can explore different development technologies and build their own preferred technology stack. Users can add technologies to the stack, remove individual items, clear the whole stack, and get toast notifications for different actions.

## Live Site

**Live URL:** https://dev-stack-a5-react.netlify.app/

## GitHub Repository

**Repository:** https://github.com/shirsendu-dev/Dev-Stack-React-Project

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Main Features

- Browse development technologies with category, difficulty, rating, badge, icon, and description.
- Add technologies to a personal "Your Stack" section and prevent duplicate selections.
- Remove a single technology or clear the whole stack with the "Remove All" button.
- Responsive layout for mobile, tablet, and desktop devices.
- Toast notifications for add, duplicate, remove, and remove-all actions.
- Loading fallback while technology data is being loaded.
- Shared orange → pink → violet gradient theme across the main brand elements.

## Project Data

Technology information is loaded from a local JSON file instead of being hardcoded inside the React components.

Each technology contains:

- id
- name
- category
- description
- icon
- rating
- difficulty
- badge

## How to Run the Project Locally

1. Clone the repository.

```bash
git clone YOUR_REPOSITORY_URL
```

2. Go to the project folder.

```bash
cd YOUR_PROJECT_FOLDER
```

3. Install dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

---

# React Questions

## 1. What is JSX, and why is it used in React?

JSX is the extension of JavaScript XML files. JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us describe what the user interface should look like.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. A child component should not change its props.

State is data managed inside a component. State can change, and when it changes React re-renders the related user interface.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

In this project, I used `useState` to store the technologies selected by the user in the "Your Stack" section.

Example:

```tsx
const [selectedTechs, setSelectedTechs] = useState<TechTypes[]>([]);
```

When a technology is added or removed, I update this state and React updates the UI.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used for things such as fetching data, working with timers, or communicating with something outside the component after rendering.

In this project, I did not use `useEffect` to load the local JSON file though. I created a Promise for the fetch request and used React's `use()` with `Suspense` to create the Promise and show a loading fallback while the data was loading.

A common alternative would be to fetch the JSON inside `useEffect` and then store the result in state.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify each item in a rendered list.

A unique key helps React understand which item was added, removed, or updated so it can update the UI correctly and efficiently.

In this project, I used the technology `id` as the key.

```tsx
<TechnologyCard key={tech.id} tech={tech} />
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used it in the "Your Stack" section. When no technologies are selected, the app shows an empty message. When technologies are selected, it shows the selected technology cards instead.

Example:

```tsx
selectedTechs.length === 0
  ? <p>Your stack is empty.</p>
  : selectedTechs.map(tech => ...)
```

I also used conditional rendering to change the button text after a technology is selected.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

Example:

```tsx
<TechnologyCard
  tech={tech}
  handleAddTech={handleAddTech}
/>
```

Here the parent sends the `tech` data and the `handleAddTech` function to the child.

A child can communicate back to the parent by calling a function that the parent passed through props.

Example:

```tsx
<button onClick={() => handleAddTech(tech)}>
  Add to Stack
</button>
```

The child calls the function, and the parent updates the state.

---

## Author

**Shirsendu Biswas**

Learning and building with React, TypeScript, and modern web development tools.