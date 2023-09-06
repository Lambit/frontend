import Input from "./Input";
import { render } from '../../test/setup';
import { createRef } from "react";


describe('Input and validation', () => {
  it('span initial an empty string', () => {
    const labelTestRef = createRef();
    // Render a checkbox with label in the document
    render(
      <Input
        labelRef={labelTestRef}
      />,
    );
  
    const labelNode = labelTestRef.current;
  
    // Verify that it's empty string by default
    expect(labelNode.textContent).toBe('');
  });
  
  it('has is-invalid class for input when help is set', () => {
      const { container } = render(<Input help='Error message' />);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const input = container.querySelector('input');
      expect(input.classList).toContain('is-invalid');
  });
  
  it('has invalid-feedback class for span when help is set', () => {
      const { container } = render(<Input help='Error message' />);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const span = container.querySelector('span');
      expect(span.classList).toContain('invalid-feedback');
  });
});