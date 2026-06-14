
export default function App(){
  return (
    <> 
    <div className="title">
       <header>
        <div className="flower">
        <h1 className="emoji">🌸</h1>
        <span className="tooltip-text">Available for new opportunities</span>
        </div>
        <div className="link">
          <a href="https://github.com/eduardacaminski" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link">
            GitHub</a>
            <a  href="/resumeport.pdf" 
                download="Resume_Eduarda_Caminski.pdf" 
                className="download">
                Download Resume(PDF)</a>
          <a href="https://www.linkedin.com/in/eduarda-caminski-6997b239b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link">
            LinkedIn</a>
                </div>
          <h2 className="realtitle">Hello, I'm Eduarda</h2>
            <p className="text">🌸I'm a Systems Analysis and Development student
            at IFRS currently in my second semester.
          </p>
        <p className="text2">🌸I have multiple interests in tecnology area such as Web Devolopment, Computer Networks, AI and Computer Architecture!</p>
       </header>
   
      <main className="abilities">
          <h1 className="layout">🌸Languages🌸</h1>
            <div className="skills">
              <h2>C</h2>
                <h2>HTML</h2>
                <h2>CSS</h2>
             <h2>TypeScript</h2>
          <h2>JavaScript</h2>
        <h2>MIPS</h2>
      </div>

        <h1 className="layout">🌸Concepts🌸</h1>
          <div className="skills">
          <h2>Computer Archicterture</h2>
        <h2>Computer Networks</h2>
      </div> 

        <h1 className="layout">🌸Tools🌸</h1>
          <div className="skills">
            <h2>React</h2>
              <h2>Cisco Packet Tracer</h2>
                <h2>VScode</h2>
              <h2>Dev-C++</h2>
            <h2>GitHub</h2>
          <h2>Git</h2>
        <h2>Vite</h2>
      </div>

        <h1 className="layout">🌸Projects🌸</h1>
          <div className="projects">
            <h2>Computer network simulation | Cisco Packet Tracer</h2>
                <a href="https://github.com/eduardacaminski/cisco-network-simulation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="portfolio-link">
                    [View Project on Github]</a>
                  <p>🌸Description: Development of a simulated corporate network architecture designed to securely and efficiently interconnect two geographically distinct company branches. The project focused on scalability, traffic optimization, and process automation using the OSI Model as a structural blueprint.</p>
                <p>🌸Network Segmentation & Layer 3 Routing: Divided the infrastructure into strategic subnets using a Cisco Router. This minimized broadcast domains, mitigated network congestion, and optimized overall bandwidth allocation between branches.</p>
              <p>🌸Automated IP Management (DHCP): Configured and deployed a DHCP server via Cisco IOS (CLI) to automate IP address assignment. This eliminated manual configuration errors, prevented IP conflicts, and reduced network administrative overhead.</p>
            <p>🌸Service Validation (HTTP): Set up simulated HTTP web servers within the infrastructure to perform end-to-end connectivity tests, ensuring proper data flow across Layer 2 (switching) and Layer 3 (routing) boundaries.</p>
          <p>🌸Infrastructure as Code (CLI): All devices (routers and switches) were configured manually using the Cisco IOS Command Line Interface, applying best practices for interface configuration and network security.</p>
        <p>🌸Technologies Used: Cisco Packet Tracer | Cisco IOS (CLI) | IP Routing (Layer 3) | Switching (Layer 2) | DHCP | HTTP | OSI Model</p>

      <h2>Inventory and sales system | Algorithm</h2>
        <a href="https://github.com/eduardacaminski/inventory-logic" 
             target="_blank" 
             rel="noopener noreferrer"
             className="portfolio-link">
             [View Project on Github]</a>
            <p>🌸Description:Development of a terminal-based Inventory Control and Business Management simulation. Built entirely using structured programming principles, the system models real-world enterprise workflows to manage product catalogs, monitor real-time stock levels, and process customer transactions securely.</p>
              <p>🌸In-Memory CRUD Operations: Designed structured algorithmic functions to perform Create, Read, Update, and Delete operations. Product attributes (such as unique names, quantities, and unit values) are organized and manipulated dynamically inside sequential memory structures (Arrays/Vectors).</p> 
            <p>🌸Search Algorithms & Data Integrity: Implemented linear search mechanisms across arrays to validate user input. The system actively prevents duplicate product registrations and gracefully handles "Product Not Found" exceptions, ensuring a reliable data state.</p>  
          <p>🌸Transactional Logic & Stockout Prevention: Programmed a business-logic engine to simulate customer checkouts. The system checks current stock levels prior to finalizing any sale to prevent negative stock (stockouts), automatically processes the transaction, and dynamically updates financial revenue records. </p>
        <p>🌸Technologies Used:Portugol Studio | Structured Programming | Data Structures (Arrays/Vectors) | Algorithms & Logic | CRUD Simulation</p>

        <h2>Numeric data modification| C language</h2>
          <a href="https://github.com/eduardacaminski/numeric-data-modification" 
             target="_blank" 
             rel="noopener noreferrer"
             className="portfolio-link">
             [View Project on Github]</a>
              <p>🌸Description:Development of a structured data processing application in C focused on low-level mathematical manipulation. The system performs cryptographic-style integer decomposition, extracting and analyzing individual digits from an input, and then reconstructing them through pure arithmetic logic while enforcing strict data integrity.</p>
              <p>🌸Mathematical Decomposition (Digit Extraction): Implemented an algorithmic workflow leveraging arithmetic operators (% and /) to isolate and extract individual digits from a whole integer. By utilizing modulo arithmetic and integer division, the system breaks down complex numerical data into atomic components.</p> 
            <p>🌸Algorithmic Recomposition: Applied reverse-engineered algebraic logic to dynamically reconstruct isolated digits back into a unified, combined four-digit data structure, validating positional notation without relying on string manipulation.</p>  
          <p>🌸Defensive Input Validation: Programmed a robust validation architecture using control flow loops (while/do-while) to enforce strict input constraints. The system actively intercepts out-of-bounds values or invalid data types, trapping execution and prompting the user until compliant data is provided. </p>
        <p>🌸Technologies Used:C (Programming Language) | Arithmetic Algorithms | Low-Level Data Manipulation | Defensive Programming | Input Validation</p>

        <h2>Bookstore inventory and sales simulator| C language</h2>
          <a href="https://github.com/eduardacaminski/bookstore-inventory-" 
             target="_blank" 
             rel="noopener noreferrer"
             className="portfolio-link">
             [View Project on Github]</a>
              <p>🌸Description:Development of a CLI (Command Line Interface) Bookstore Management and Transactional System in C. The application showcases advanced data aggregation by grouping heterogeneous primitives (text, integers, and floating-point metrics) into custom structures, simulating an in-memory database with inventory tracking, statistical calculation, and automated sales verification.</p>
                <p>🌸Heterogeneous Data Aggregation (struct): Engineered a custom struct archetype to encapsulate all data points of a literary asset (Title, Author, Year, Pages, Price, and Stock Quantity), manipulating them sequentially as an array of structures.</p> 
                  <p>🌸Deduplication & Frequency Mapping Algorithm: Developed an optimization algorithm to count unique author distributions. By implementing an auxiliary mapping array (aux), the system flags already-processed indices, preventing duplicate console outputs and calculating the correct frequency count per author.</p>  
                <p>🌸Buffered Input & String Manipulation: Handled terminal input streams defensively using advanced scanf regular expression formatting (%[^\n]s). This ensures safe handling of multi-word string captures containing spaces (e.g., full book titles and author names) without breaking the input buffer. </p>
              <p>🌸Transactional Logic & Stock Deduction: Programmed a real-time sales validation system. It utilizes string comparison (strcmp) to locate items, evaluates stock availability before confirming a transaction to prevent backorders, dynamically updates remaining inventory, and calculates total order prices. </p>
            <p>🌸Interactive Lifecycle Architecture: Designed a user-centric control flow interface leveraging a do-while state loop and a hierarchical switch-case router to manage the user’s runtime journey seamlessly.</p>
          <p>🌸Technologies Used: C (Programming Language) | Data Structures (Structs) | Memory Mapping & Deduplication | String Manipulation (string.h) | CLI Control Flow</p>

          <h2>Digital Oracle: algorithmic randomization and glassmorphism UI| Website</h2>
            <a href="https://github.com/eduardacaminski/oraculo" 
             target="_blank" 
             rel="noopener noreferrer"
             className="portfolio-link">
             [View Project on Github]</a>
              <p>🌸Description:Development of an interactive web application designed to simulate a mystical oracle, dynamically drawing insightful messages from a curated dataset. Built with React and TypeScript, the project focuses on frontend componentization, type-safe data manipulation, and high-fidelity CSS effects to deliver an immersive, responsive, and atmospheric user experience.</p>
                <p>🌸Type-Safe Data Structures (TypeScript): Leveraged TypeScript to strictly type the data models of the message collections and component interfaces. This ensures complete data safety, enforces strict contract definitions, and prevents runtime bugs during dynamic content injection.</p> 
                  <p>🌸State Control & Randomization Engine: Implemented React state hooks (useState) to seamlessly manage the application's lifecycle and UI rendering states. Integrated an algorithmic pseudo-randomization mechanism using mathematical formulas to smoothly select and display elements from an in-memory array structure.</p>  
                <p>🌸Advanced CSS & Glassmorphism UI: Engineered a captivating, ethereal visual atmosphere by leveraging modern styling techniques. Applied sophisticated glassmorphism effects using backdrop-filter: blur, rich radial gradients for deep background transitions, and custom border-image properties to compose a polished mystic aesthetic. </p>
              <p>🌸Component-Driven Architecture: Followed frontend best practices by modularizing the interface into reusable React components with a clear separation of concerns (such as the interactive card container, trigger mechanisms, and dynamic text viewports).</p>
            <p>🌸Technologies Used: React | TypeScript | Advanced CSS (Glassmorphism) | State Management (Hooks) | Component-Driven UI</p>

            <h2>Cozy Mood Tracker: unidirectional data flow and responsive state management| Website</h2>
              <a href="https://github.com/eduardacaminski/humor-tracker" 
             target="_blank" 
             rel="noopener noreferrer"
             className="portfolio-link">
             [View Project on Github]</a>
              <p>🌸Description:Development of a minimalist, responsive Mood Tracking application designed to map and centralize daily emotional metrics. Built with React and TypeScript on top of Vite, the project serves as a foundational study in state persistence, component rendering lifecycles, and user-driven event handling, delivering a clean and comforting user interface.</p>
                <p>🌸Predictable State Architecture (useState): Implemented a centralized React state hook to control the core application metric (the active user mood). This enforces a clean, reactive flow where the interface updates instantly without manual DOM manipulation.</p> 
                 <p>🌸Strict Type Defintions (TypeScript Enums/Types): Utilized TypeScript to strictly define the allowable mood states, associating each variant with its precise emoji token and descriptive metadata. This prevents invalid state updates and ensures compiler-level code reliability.</p>  
                <p>🌸Conditional Rendering & Dynamic UI Routing: Programmed conditional rendering mechanisms within the JSX layout. The interface dynamically evaluates the state to alter structural elements, typography, and visual accents in real time as the user interacts with the system. </p>
              <p>🌸Cozy & Minimalist UI/UX Architecture: Designed a distraction-free, cozy visual experience using semantic CSS3. The styling leverages flexible box models (Flexbox) for flawless auto-centering, balanced padding hierarchies, and smooth transition properties to ensure an intuitive and relaxing user experience across devices.</p>
            <p>🌸Technologies Used: React | TypeScript | Vite | State Management (useState) | Component Lifecycles | CSS3 (Flexbox)</p>
      </div>
    </main>
    </div>
    </>
  );
}