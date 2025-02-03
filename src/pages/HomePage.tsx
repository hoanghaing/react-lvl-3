// import "@/assets/scss/AutoFilter.scss";

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
      <ol>
        <li>
          <b>
            EXERCISE #1 - Create a generic localStorage handler usable by React function component
          </b>
          <ul>
            <li>
              Your API should enable any React function component to store a new key/value pair in the browser’s localStorage.
            </li>
            <li>
              A component should also be able to subscribe to a specific key and receive updates when the corresponding value is added, updated, or deleted. Such an update should trigger a component re-render when needed.
            </li>
            <li>
              Any component using your API must not be aware that localStorage is being used. All interactions with the native browser storage must be hidden from consumer components.
            </li>
            <li>
              Changing the localStorage value outside of the scope of the React application should also send an update to subscribed components (a small delay is acceptable in that scenario).
            </li>
            <li>
              Illustrate your handler with an example that uses at least two different components: One can set a value in localStorage using the API, and the other can receive any update and display it instantly on the screen.
            </li>
          </ul>
        </li>
        <li>
          <b>
            EXERCISE #2 - Create a generic dialog component that can be customized with any content
          </b>
          <ul>
            <li>
              The component can be used as a modal (the user has to close it before being able to interact with the rest of the webpage) or a regular dialog (the user can still interact with the rest of the page)
            </li>
            <li>
              You cannot use any third-party component library for this, though you can use third-party CSS to achieve the modal/dialog overlay effect if needed.
            </li>
            <li>
              The dialog's header, body, and footer could be any HTML/component the user wants. The dialog API should also expose a way to open/close it from another component.
            </li>
            <li>
              Create a sample component that illustrates different use cases of your dialog.
            </li>
          </ul>
        </li>
        <li>
          <b>
            EXERCISE #3 - Create a generic auto-filter dropdown component to filter any kind of data
          </b>
          <ul>
            <li>
              If the user types 'En', then only the items that have ‘en’ in their name should show up in the list
            </li>
            <li>
              The filter should not be case-sensitive.
            </li>
            <li>
              We should be able to specify (as a prop) which object property name is used for both the option label and filtering (for instance, “name” or “description”)
            </li>
            <li>
              The matching portion(s) of the option label should be rendered in bold text, for instance, Entertainment
            </li>
            <li>
              The user should be able to select a list item that will be returned by the component using a callback prop called "valueChange".
            </li>
            <li>
              No third-party component is allowed for the dropdown, just regular HTML/CSS/ React.
            </li>
            <li>
              To illustrate its behavior, use your new auto-filter dropdown with two different data samples in a test component. You can use this free public API as one example: https://jsonplaceholder.typicode.com/users
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
