import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

function getNativeElement(
  elementSelector: string,
  containerDebugElement: DebugElement
) {
  return containerDebugElement.query(By.css(elementSelector)).nativeElement;
}
export { getNativeElement };
