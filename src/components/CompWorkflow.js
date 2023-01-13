import Highlight from 'react-highlight'

function CompWorkflow(){
    return (
<main className="inner-main">
<h1> Computation workflow</h1>
<p> As a physics student, you might start to code before you really "learn" to code. It is true that we can do a lot of amazing things by simply being familiar with some basic statements such as <code>if-else</code> and <code>for</code>. However, as your project grows larger and larger, you might come to a point that you want to stop and think about how to organize your code, such that it is easy to extend, easy to read (after you leave it for a year). Here I would like to share some of the practices that are helpful in my computation, some of which I summarized from my own experience, and some of which I learnt from reading other people's high quality codes. I will use python for illustration. </p>

<h2> Parameter Initialization</h2>
<p>As we add more and more features to our program, one thing that might become problematic is how to store and save the parameters for our record. Imagine that your initial code has three initial parameters, and when you decide to add one more feature, the fourth parameter is needed. Now, you need to modify your code so that it can save this fourth parameter as well. 
        
</p>
<p>Here, we show that using <b>class and object can make parameter (data) storage clear and worry-free</b>. In the following simple scenario, we wish to compute the average entanglement entropy for a random system. We wish to examine three lengths: 64, 128, and 256, and for each system length, we generate 100 samples and perform the ensemble average. Finally, we want to keep track of whether we are in debug mode. We are able to store all these parameters by creating a <code>Para</code> class: </p>
<Highlight>{
`# The following code is in init_data.py
class Para:
    def __init__(self):
        self.L = [64, 128, 256]
        self.sample = 100    
        self.debug_mode = 1

# The following code is in main_func.py 

from init_para import Para
def main():
    # data initialization
    para = Para()`}</Highlight> 
<p>This makes it easier to save the parameters of each run, because all we need is to save the object <code>para</code> rather than keeping track of each one of variables: <code>L</code>, <code>sample</code> and <code>debug_mode</code>. Now, if we want to add a fourth parameter <code>cross_ratio</code> and set it to "0.5", all we need to do is to add one more line to class Para: <code>self.cross_ratio = 0.5</code>. </p>  

<p><i>Years later, I realized this is essentially the same idea as <code>props</code> in React :)</i></p>

As a side note, another way to achieve the similar funtionality is by using the Python dictionary. 

<h2>Functionality Realization</h2>
<p>Modular programming; DRY principal</p>

<h2>Test your module</h2>
<p> As you extend your program to code with more general cases, you would need to make sure that it still works well on your old code. To give us a piece of mind, we can write a test function and utilize the `assert` key word. </p>

<h2>Data Storage</h2>

<h2>Documentation</h2>
	</main>
    )
}

export default CompWorkflow;