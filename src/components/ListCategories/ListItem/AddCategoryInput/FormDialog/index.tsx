import { FormEvent, useRef, useState } from 'react';
import { useAddCustomCategory } from '../../../../../store/ToDoStore';
import { ColorSelector } from '../../../../ColorSelector';
import { HexColor } from '../../../../../utils/interfaces';

interface FormDialogInterface {
  toggleDisplay: () => void;
}

export default function FormDialog({
  toggleDisplay
}: FormDialogInterface) {
  const [errorMessage, setErrorMessage] = useState('');
  const [newCategoryColor, setNewCategoryColor] =
    useState<HexColor>('#EA5959');

  const addCustomCategory = useAddCustomCategory();

  const newCategoryNameInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const categoryName = newCategoryNameInput.current?.value;

    if (categoryName && newCategoryColor) {
      try {
        addCustomCategory(categoryName, newCategoryColor);
        toggleDisplay();
      } catch (_) {
        setErrorMessage('You already added this category!');
      }
    } else {
      setErrorMessage('All fields are required!');
    }
  };

  const disableErrorWhenStartTyping = () => {
    if (errorMessage && newCategoryNameInput.current?.value) {
      setErrorMessage('');
    }
  };

  return (
    <dialog
      className="absolute top-0 flex items-center justify-center z-10 w-full h-full
        bg-slate-900/90 text-base"
    >
      <div className="relative w-92 bg-slate-50 rounded-xl p-8 pb-20">
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-category-name">
            How will the new category be called?
          </label>
          <br />
          <input
            id="new-category-name"
            autoFocus
            type="text"
            data-error={!!errorMessage}
            placeholder="Ex:. College, Groceries, ..."
            className="bg-slate-200 border outline-0 text-slate-600 rounded-md w-full p-2
              my-2 data-[error=true]:border-red-500 border-transparent"
            ref={newCategoryNameInput}
            onKeyDown={disableErrorWhenStartTyping}
          />
          <br />
          <label htmlFor="new-category-color">
            Choose a color for the new category:
          </label>
          <ColorSelector
            defaultColor={newCategoryColor}
            setNewColor={(hexColor) => setNewCategoryColor(hexColor)}
          />
          {errorMessage ? (
            <span className="text-red-500">{errorMessage}</span>
          ) : null}
          <div className="flex justify-end mt-4 absolute bottom-5 right-5">
            <button
              type="button"
              className="px-3 py-2 bg-slate-200 hover:bg-slate-200/75 text-slate-600 rounded-lg"
              onClick={() => toggleDisplay()}
            >
              Cancel
            </button>
            <button
              className="px-3 py-2 bg-green-500 hover:bg-green-500/75 text-slate-50 ml-2
                rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
