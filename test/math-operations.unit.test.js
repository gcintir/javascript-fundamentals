
const sum = require('../math-operations');

beforeAll(() => {
    console.log('UNIT TESTS STARTS TO RUN');
    expect(() => {return true}).toBeTruthy();
});

afterAll(() => {
    console.log('UNIT TESTS FINISHED');
    expect(() => {return true}).toBeTruthy();
});

test('sum of 1 and 2 equals 3', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,1)).not.toBe(3);
});

test('object assignment test', () => {
    const data = {id : 12345};
    data.key = 'xyz';
    expect(data).toEqual({
        id : 12345,
        key : 'xyz'
    });
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  });

  const fetchData = (flag) => {
    return new Promise((resolve, reject)=> {
        if (flag) {
            console.log('flag is true');
            resolve('peanut butter');
        } else {
            console.log('flag is false');
            reject('failed to fetch data');
        }
    });
  };

  test('the data is peanut butter', () => {
    return fetchData(true).then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  test('data is peanut butter async', async () => {
    const data = await fetchData(true);
    expect(data).toBe('peanut butter');
  });

  test('fetchData fails with error', async () => {
    expect.assertions(1);
    try {
        await fetchData(false);
    } catch(e) {
        expect(e).toMatch('failed to fetch data');
    }
  });

  test('data is peanut butter async - 2', async() => {
    await expect(fetchData(true)).resolves.toBe('peanut butter');
  });

  test('fetchData fails with error - 2', async() => {
    await expect(fetchData(false)).rejects.toBe('failed to fetch data');
  });

  test('the fetch fails with an error - 3', () => {
    expect.assertions(1);
    return fetchData(false).catch(e => expect(e).toMatch('failed to fetch data'));
  });

  ////////////////////////////////////////////////////////////////////////////////////

  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  test('Testing forEach with mock callback function', () => {
    const mockCallback = jest.fn().mockImplementation(x => 42 + x).mockName('mockedCallback');
    forEach([0,1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  
    // The return value of the first call to the function was 42
     expect(mockCallback.mock.results[0].value).toBe(42);

     expect(mockCallback).toHaveBeenCalled();

  });

  test('mock return values', () => {
    const mock = jest.fn();
    console.log(mock());
    mock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(mock(), mock(), mock(), mock());

    expect(() => {return true}).toBeTruthy();
  });




  

  
