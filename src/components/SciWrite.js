function SciWrite (){
    return(
        <div className="inner-main">
            <h1>Writing in Science</h1>
            <p>We all start learning to write in primary school, but despite years of writing experience, academic writing can still be a challenge, especially for non-native speakers. Unfortunately, many of us don't realize we have a writing problem until we see our supervisor's disappointed face. Writing is crucial in academic communication, yet most graduate programs don't offer a dedicated writing course in their departments.</p>
            
            <p>While I have attended two institutions that offered writing support for graduate students, these resources were not widely advertised. My friend Asmund introduced me to the <a href="https://www.youtube.com/watch?v=vtIzMaLkCaM">"The Craft of Writing Effectively"</a> lecture given by Professor Lawrence McEnerney at the University of Chicago. It's unfortunate that I didn't come across this valuable resource on my own as a UChicago student.</p>
            
            <p>Later, I attended the writing course <a href="https://writing.princeton.edu/graduate-students-postdocs/writing-courses-science-engineering/wri-503">WRI503</a> at Princeton, taught by Dr. Krystal Lum, with the goal of gaining a more comprehensive understanding of academic writing. This page serves as a repository for my notes and thoughts from that course.</p>
            
            
            
            <h2>WRI503 Note</h2>
            <h3>Abstract</h3>
            <p>What makes a good abstract? Generally, a good abstract should include the following elements:
            <ol>
                <li>Orienting information/background</li>
                <li>Motivation: why did you do this work?</li>
                <li>Question: what do you try to explore?</li>
                <li>Novel results and finding</li>
                <li>Methodology</li>
                <li>Implication: why does this result matter? Why should the reader care?</li>
            </ol>
            To connect these elements together, we can use transitional phrases such as "However, ... is understudied", "In this study, we tested...", "The results support a model...", "Our study suggests that/provides a key insight into...". Here is an example of a good abstract: <a href="https://www.nature.com/articles/nature05167">No evidence for thick deposits of ice at the lunar south pole</a>. 
            </p>
            <p>For me, it's important that the abstract has a smooth flow of thought. In other words, readers should be able to understand and follow the content without needing to pause and re-read. After all, it's the readers who ultimately decide whether the paper is important and whether they want to continue reading the main text, and we should not use the abstract to annoy them. </p>
            
            <p>With these in mind, I try to revise one of my abstracts:</p>

            <p className="writing-sample">The multipartite entanglement structure for the ground states of two dimensional topological phases is an interesting albeit not well understood question. Utilizing the bulk-boundary correspondence, the calculation of tripartite entanglement in 2d topological phases can be reduced to that of the vertex state, defined by the boundary conditions at the interfaces between spatial regions. However, evaluating the vertex state is currently limited to non-interacting models, and a method for general models is lacking. In this paper, we use the conformal interface technique to calculate entanglement measures in the vertex state. Our results reveal that the entanglement measures include area law terms, corner contributions, topological pieces, and a possible additional order one contribution, which is also supported by our precise numerical evidence. This explains our previous observation of the Markov gap
            h = c/3 ln 2 in the 3-vertex state. Furthermore, it generalizes the above Markov gap result to the p-vertex state, general rational conformal field theories, and more choices of subsystems, deepening our understanding of multipartite entanglement.  </p>

            <h3>Motives in Science</h3>
            <p>Compelling research papers have complex motives, usually with at least two levels:</p>
            <p>
                <ul className="para-like">
                    <li>An <i>external</i> motive: some big issue or problem that many people are interested in.</li>
                    <li>An <i>internal</i> motive: the specific problem or question that this article will address.</li>
                </ul>
            </p>
            <p>
                External motives are usually easier to recognize because they appeal to broader audiences. But often the crux of a compelling proposal is recognizing the nature of the internal motive. Here are some common internal motives: The field doesn't know X due to...
                <p>
                <ol className="para-like">
                    <li>Lack of data: we don't have enough data for statistical significance. </li>
                    <li>Lack of resolution: we don't have specific enough data to tell what's happening.</li>
                    <li>Lack of consistency: There's lots of data, but it's contradictory or inconsistent.</li>
                    <li>Lack of accuracy: We don't believe the data we have, but we can't get better data; we can model the system, but not well enough to be useful.</li>
                    <li>Lack of resources: We don't have fast enough computer; we can't access everything we need.</li>
                    <li>Lack of theory: We have data and models, but they are entirely emperical and therefore not transferrable. </li>
                </ol>
                </p>
                
                The more precise you can frame your problem, the more precisely your reader will recognize the resolution. The precision of this match is what shows that your aims will work. 
            </p>

            <h3>Science of Scientific Writing</h3>
            <p>Here I summarize some of the viewpoints in the text <a href="https://cseweb.ucsd.edu/~swanson/papers/science-of-writing.pdf">The Science of Scientific Writing</a>. When writing, we should <b>write with the reader in mind</b> and understand the reader expectations. Information is interpreted more easily and uniformly if it is placed where most readers expected to find it.  Let's proceed with several common reader expectations.</p>
            
            <p>
            <ol className="para-like">
                <li><b>Avoid Subject-Verb Separation. </b> Readers expect a grammatical subject to be followed immediately by the verb. The separation between verb and subject makes the text hard to read. </li>
                <li><b>A single function.</b> Each unit of discourse, no matter what the size, is expected to serve a single function, to make a single point. What we mean by the unit of discourse can be sentence, paragraph, or section. </li>
                <li><b>The Stress Position.</b> It is a linguistic commonplace that readers natually empasize the material that arrives and the end of a sentence, which is called the stress position. As writers, we thus need to put the emphatic/exiciting material at the end or the syntactic closure. A syntactic closure can also be created by colon or semicolon. A sentence is too long when it has more viable candidates for stress positions than there are stress positions available. 
                
                For a paragraph, we shall put the emphatic sentence at the end because the readers will interpret the last sentence as the important point of this paragraph. 
                </li> 
                <li><b>The Topic Position. </b> The topic position is the beginning of a sentence. In the topic position the reader needs and expects perspective and context. Readers expect a unit of discourse to be a story about whoever shows up first. Reader also expect the material occupying the topic position to provide then with linkage (looking backward) and context (looking forward). When old information arrives in the topic position, it helps readers to construct the logical flow of the argument. When new information is important enough to receive emphasis, it functions best in the stress position. </li>

                <li><b>Perceive Logical Gaps. </b> When old information does not appear at all in a sentence, whether in the topic position or elsewhere, readers are left to construct the logical linkage by themselves. To avoid this, writers should spot discontinuities, bridge the gaps and to rearrange the structure of the prose, thereby increasing the accessibility of the scientific content. </li>

                <li><b>Locate the Action. </b>Readers expect the action of a sentence to be articulated by the verb. </li>
            </ol>
            When writing, we cannot succeed in making even a single sentence mean one and only one thing; we can only incrase the odds that a large majority of readers will tend to interpret our discourse according to our intentions. 
            </p>
            
            <h3>Feedbacks from Workshop</h3>
            <p>
            <ol className="para-like">
            <li>
                <p><b>Consider the broader impact.</b> Try to ask yourself: why your paper matters to the other scientists in condensed matter theory? In condensed matter experiment? In other realms of physics? In other science disciplines? Or even, for the general public? Try to use two or three sentences to summarize the broader impact of your work. One suggestion from Krystal is to read the department news or the opinion articles and observe how they write the orienting information in the first several sentences. I will try to practice this!</p>
            </li>
            <li>
                <p><b>Always ask yourself "why?"</b> For example, in one of my abstract sentence, I write:</p>        
            <p className="writing-sample">
            In the critical Hermitian systems, quantum entanglement
            is a useful tool to probe the universal properties; while the power of entanglement remains less
            understood in non-Hermitian criticality. In this manuscript, we analytically investigate how the
            unique features of non-Hermitian critical systems can manifest in their quantum entanglement. 
            </p>
            <p>However, there is a logical gap here after the first sentence. Indeed there is an open question, but the readers still do not understand why we should care about this. So we may consider add "Understanding this is important because..." after the first sentence. </p>
            
            <p>As another example, after introducing a new concept, always ask yourself why you need it here. Here is one of my writing sample </p>
            <p className="writing-sample">
            The violation of Hermicity brings rich physical phenomena. In
            particular, the critical non-Hermitian Hamiltonians may
            host eigenvalue singularity dubbed as exceptional points
            under the periodic boundary condition. At the exceptional point, the Hamiltonian is defective in the sense
            that it is not diagonalizable and takes the structure of
            Jordan form. Furthermore, the eigenvectors of a critical
            non-Hermitian Hamiltonian may also be singular...
            </p>
            <p>The flow of logic stops after the third sentence. Readers may be confused why we tell them the Hamiltonian is defective and why it matters. Although to us, the fact that the Hamiltonian is defective itself is already interesting, we should avoid this way of thinking when writing. In the above paragraph, we should tell the readers the physical implication of the defective hamiltonian (this is also the impact!). Another lesson is that, always be mindful of the concept that only appears once. If this is the case, ask yourself whether you really need to include it. </p>
            </li>
            <li><b>Consistent usage of key terms. </b> We should always be clear about what our key terms refer to and use consistent key terms. </li>
            <li><b>Be more mindful on the transition between sentences, and the transition between paragraphs. </b></li>
            <li><p><b>Be clear about what the challenge is and emphasize your contribution.</b> Here is one of my writing:</p> 
            <p className="writing-sample">
            In the previous section, the non-symmetric three-wavefunction overlap is computed due to its technical simplicities. The non-symmetric overlap can be readily computed using determinant of the wavefunctions, by relating it to well-known two-wavefunction overlap. However, the non-symmetric overlap might fail to include possible second order contributions to the overlap and this necessitates the symmetric overlap. In this section, we develop the formalism of symmetric three-wavefunction overlap. Despite no direct connection to known two-wavefunction overlap, we build up the method by introducing an auxiliary wavefunction which is a product of maximally entangled pairs. With the auxiliary wavefunction, we find the symmetric overlap turns out to be a Pfaffian of involving wavefunctions; this greatly reduces the technical difficulties. We detail our derivations for symmetric overlap in the following. 
            </p>
            <p>In the above paragraph, I should add that the two-wavefunction overlap is easy to compute, and highlight the technical difficulty of computing symmetric overlap because it cannot be reduced to a known simple formalism. In the second to last sentence, readers are also confused about what are the difficulties exactly, and why does our method greatly reduce the difficulty. </p>
            </li>
            </ol>
            </p>

        </div>
    )
}

export default SciWrite;