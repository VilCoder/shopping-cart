export function CustomButton({ children, ...restOfProps }) {
    return (
      <button {...restOfProps}>
        {children}
      </button>
    );
  }
