import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { ButtonLink } from '../Button'
import services from '../../assets/services'

services.map((service) => ({}))

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PickServices({ service }) {
  const [selected, setSelected] = useState(services[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-slate-700">
            Would you like a free quote for one our rope access services?
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-slate-200 bg-white py-2 pl-3 pr-10 text-left focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm">
              <span
                className={
                  selected.title === '--No service selected--'
                    ? 'text-slate-500'
                    : `${'block truncate text-slate-800'}`
                }
              >
                {selected.title}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {services.map((service) => (
                  <Listbox.Option
                    key={service.title}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-orange-600 text-white' : 'text-slate-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={service}
                    required
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {service.title}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-orange-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
