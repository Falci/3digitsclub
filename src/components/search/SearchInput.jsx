import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

export const SearchInput = ({ expand, onChange }) => {
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const [d3, setD3] = useState('');

  const value = `${d1}${d2}${d3}`;
  const isValid = value.length === 3;

  useEffect(() => {
    if (isValid) {
      onChange(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isValid]);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const onFocus = (e) => {
    e.preventDefault();

    if (isValid) {
      setD1('');
      setD2('');
      setD3('');
      ref1.current.select();
      return;
    }

    if (d1 === '') {
      ref1.current.select();
      return;
    }

    if (d2 === '') {
      ref2.current.select();
      return;
    }

    if (d3 === '') {
      ref3.current.select();
      return;
    }
  };

  const onBeforeInput = (setD, nextRef) => (e) => {
    e.preventDefault();
    const v = e.data.replace(/[^\d]/g, '');

    if (Number.isInteger(Number(v)) && v.length === 1) {
      setD(v);
    } else {
      setD('');
    }

    setTimeout(() => {
      if (!nextRef.current.value) {
        nextRef.current.focus();
      } else {
        e.target.blur();
      }
    }, 1);
  };

  return (
    <>
      <div
        className={cn(
          'w-full justify-between items-center inline-flex relative text-[18vw] md:text-[8rem]',
          ' h-[25vw] md:h-[200px] overflow-hidden',
          expand ? 'rounded-t-2xl' : 'rounded-2xl'
        )}
      >
        <input
          ref={ref1}
          onFocus={onFocus}
          className="border text-center w-1/3 h-full py-10 focus:outline-none border-t-0 border-l-0"
          value={d1}
          onBeforeInput={onBeforeInput(setD1, ref2)}
          autoFocus
        />
        <input
          ref={ref2}
          onFocus={onFocus}
          className="border text-center w-1/3 h-full py-10 focus:outline-none border-t-0 border-x-0"
          value={d2}
          onBeforeInput={onBeforeInput(setD2, ref3)}
        />
        <input
          ref={ref3}
          onFocus={onFocus}
          className="border text-center w-1/3 h-full py-10 focus:outline-none border-t-0 border-r-0"
          value={d3}
          onBeforeInput={onBeforeInput(setD3, ref1)}
        />
      </div>
    </>
  );
};

SearchInput.propTypes = {
  expand: PropTypes.bool,
  onChange: PropTypes.func,
};
