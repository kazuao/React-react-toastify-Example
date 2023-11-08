import React from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Pause the timer when the mouse hover the toast.
 * `Default: true`
pauseOnHover?: boolean;
  * Pause the toast when the window loses focus.
  * `Default: true`
pauseOnFocusLoss?: boolean;
  * Remove the toast when clicked.
  * `Default: true`
closeOnClick?: boolean;
  * Set the delay in ms to close the toast automatically.
  * Use `false` to prevent the toast from closing.
  * `Default: 5000`
autoClose?: number | false;
  * Set the default position to use.
  * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
  * `Default: 'top-right'`
position?: ToastPosition;
  * Pass a custom close button.
  * To remove the close button pass `false`
closeButton?: boolean | ((props: CloseButtonProps) => React.ReactNode) | React.ReactElement<CloseButtonProps>;
  * An optional css class to set for the progress bar.
progressClassName?: ToastClassName;
  * An optional style to set for the progress bar.
progressStyle?: React.CSSProperties;
  * An optional css class to set for the toast content.
bodyClassName?: ToastClassName;
  * An optional inline style to apply for the toast content.
bodyStyle?: React.CSSProperties;
  * Hide or show the progress bar.
  * `Default: false`
hideProgressBar?: boolean;
  * Pass a custom transition built with react-transition-group.
transition?: ToastTransition;
  * Allow toast to be draggable
  * `Default: true`
draggable?: boolean;
  * The percentage of the toast's width it takes for a drag to dismiss a toast
  * `Default: 80`
draggablePercent?: number;
  * Specify in which direction should you swipe to dismiss the toast
  * `Default: "x"`
draggableDirection?: DraggableDirection;
  * Define the ARIA role for the toast
  * `Default: alert`
  *  https://www.w3.org/WAI/PF/aria/roles
role?: string;
  * Set id to handle multiple container
containerId?: Id;
  * @deprecated
  * ⚠️ Will be removed in the next major release. You can pass a react component with you handler instead.
  *
  * Fired when clicking inside toaster
onClick?: (event: React.MouseEvent) => void;
  * Support right to left display.
  * `Default: false`
rtl?: boolean;
  * Used to display a custom icon. Set it to `false` to prevent
  * the icons from being displayed
icon?: ToastIcon;
  * Theme to use.
  * `One of: 'light', 'dark', 'colored'`
  * `Default: 'light'`
theme ?: Theme;
*/

function App() {
  const notify = () => toast.warning("Wow so easy!");
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </div>
  );
}

export default App;
