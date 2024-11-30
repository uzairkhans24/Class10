function FooterSection(){
    return(
        <div>
            <div className="flex justify-around py-20 leading-[2.5]  bg-gray-300">
                <ul>
                    <h1 className="text-xl font-bold">Core Courses</h1>
                    <li>Programming Fundamentals</li>
                    <li>Web2 Using NextJS</li>
                    <li>Earn as You Learn</li>
                </ul>

                <ul>
                    <h1 className="text-xl font-bold">Advance Courses</h1>
                    <li>Web 3 and Metaverse</li>
                    <li>Cloud-Native Computing</li>
                    <li>Artificial Intelligence (AI) and Deep Learning</li>
                    <li>Ambient Computing and IoT</li>
                    <li>Genomics and Bioinformatics</li>
                    <li>Network Programmability and Automation</li>
                </ul>

               <ul>
                <h1 className="text-xl font-bold">Social Links</h1>
                <li>
                <a href="" className="text-blue-500">mrkhans227@gmail.com</a>
                </li>
               <li>
                <b>0316-3875379</b><br />
               <b>Made By Uzair Khan</b>

               </li>
               </ul>
                
            </div>
        </div>
    )
}
export default FooterSection;