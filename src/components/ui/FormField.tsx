"use client";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  requiredLabel?: string;
  placeholder?: string;
  options?: string[];
  rows?: number;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  error,
  requiredLabel = "Required",
  placeholder,
  options,
  rows,
  value,
  onChange,
}: FormFieldProps) {
  const inputClasses = `w-full rounded-lg border px-4 py-3 text-neutral-900 transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
    error ? "border-red-500" : "border-neutral-300"
  }`;

  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-neutral-700">
        {label}
        {required && (
          <span className="ml-1 text-red-500" title={requiredLabel}>
            *
          </span>
        )}
      </label>
      {options ? (
        <select
          id={name}
          name={name}
          required={required}
          className={inputClasses}
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder || label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : rows ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
