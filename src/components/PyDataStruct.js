import Highlight from 'react-highlight'

function PyDataStruct(){

    return(    
    <>
<main className="inner-main">
<h1>Python data structure</h1>
<h2>First glance: variable and object</h2>
Python's data consists of <i>variable</i> and <i>object</i>. The variable is a reference or "pointer" to the object. For example, when we type in <code>a = 1</code>, <code>a</code> is the variable, which refers to the object <code>1</code>.
<h3>Rebind and mutate</h3>
In Python, <code>int, float</code> are immutable objects while <code>list, np.array</code> are mutable objects. The mutable objects might bring some subtlety in our code. Let's consider the following simple example:
<Highlight >
{
`# rebind
def add_func_ver1(arr):
    arr = arr + 1
    return arr

# mutate
def add_func_ver2(arr):
    arr += 1
    return arr

input_arr = np.array([1.0, 2.0])
print(" The input array is: ", input_arr)
print(" The ID of input array is: ", id(input_arr))

output_arr = add_func_ver1(input_arr)
print("...After the addition...")
print(" The output array is: ", output_arr)
print(" The ID of input array is: ", id(output_arr))
print(" The input array is: ", input_arr)
print(" The ID of input array is: ", id(input_arr))`
}    
</Highlight>

<p>Here, we use <code>id</code> to examine the ID of an object that the variable refers to. This is a very useful way to debug. We see that when using <code>add_func_ver1</code>, the ID of <code>input_arr</code> and <code>output_arr</code> are different, and executing the addition function does not change the value of the input array, which is as what we would expect. However, when using <code>add_func_ver2</code>, we find the ID of <code>input_arr</code> and <code>output_arr</code> are the same, and  executing the addition function does change the value of the input array. </p>
<p> The reason for these two different behaviors is: in <code>add_func_ver1</code>, the variable <code>arr</code> is <b>rebinded</b> to a different object <code>np.array([2.0, 3.0])</code>, while in <code>add_func_ver2</code>, the original object <code>arr</code> is <b>mutated</b> to <code>np.array([2.0, 3.0])</code>. This function is equivalent to:</p>
<Highlight>{`# mutate
arr[0] = arr[0] + 1
arr[1] = arr[1] + 1`}
</Highlight>

<h3>Copy and deepcopy</h3>
</main>
    </>
    
    )
}

export default PyDataStruct;