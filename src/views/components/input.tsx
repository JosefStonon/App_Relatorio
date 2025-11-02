interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
}

export function Input(props: Iprops) {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor={props.htmlFor}
        className="block text-sm/6 font-medium text-white"
      >
        {props.name}
      </label>
      <div className="mt-2">
        <input
          {...props}
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        />
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor={props.htmlFor}
          className="block text-sm/6 font-medium text-white"
        >
          Sexo
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id={props.id}
            name={props.name}
            autoComplete={props.autoComplete}
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pl-3 pr-8 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          >
            <option>Female</option>
            <option>male</option>
          </select>
        </div>
      </div>
    </div>
  );
}
