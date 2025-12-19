// --- Placement Logic ---
class PlacementLogic {
    getHarvesterInstructions() {
        return `
            <ol>
                <li><strong>In the Harvest Sector (Tactics Card 1):</strong></li>
                <li>Place Harvesters in this priority order:
                    <ul>
                        <li>Empty Deep Desert Areas (not adjacent to Atreides/Sietch).</li>
                        <li>Empty Desert Areas (not adjacent to Atreides/Sietch).</li>
                        <li>Other free Deep Desert Areas.</li>
                        <li>Other free Desert Areas.</li>
                    </ul>
                </li>
                <li><em>If no space:</em> Place in an Adjacent Sector (NOT the Target Sietch) following the same order.</li>
            </ol>
        `;
    }

    getCarryallInstructions() {
        return `
            <p>Place Carryalls in Air Zones that protect the <strong>highest number of Harvesters</strong>.</p>
        `;
    }

    getOrnithopterInstructions() {
        return `
            <ol>
                <li>If there are Harkonnen Legions 2 areas away from an attackable Sietch: Place 1 Ornithopter in their Air Zone.</li>
                <li>Place the rest in Air Zones connected to the <strong>Target Sietch</strong>.</li>
                <li><em>If no space:</em> Place in Air Zones of Sectors adjacent to the Target Sietch (Priority: Central Sector, then others).</li>
            </ol>
        `;
    }
}

// --- Action Logic ---
class ActionLogic {
    getLeadershipStrategyInstructions() {
        return `
            <h3>Action Priority (Leadership/Strategy)</h3>
            
            <div style="border: 1px solid #ffd700; background: rgba(255, 215, 0, 0.05); padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem; text-align: left;">
                <strong style="color: #ffd700;">🏆 1. GOLDEN RULE (Renowned Leaders):</strong>
                <ul style="margin-top: 0.4rem; font-size: 0.9rem; padding-left: 1.2rem;">
                    <li>Is there a Renowned Leader (Rabban/Feyd) with a matching icon?
                        <ul style="list-style: none; padding-left: 0.5rem; margin-top: 0.2rem;">
                            <li>✅ <strong>YES:</strong> Execute their Special Action! (End of turn).</li>
                            <li>❌ <strong>NO:</strong> Proceed to Standard Hierarchy.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h4 style="margin-bottom: 0.5rem;">2. Standard Execution Hierarchy</h4>
            <div style="font-size: 0.9rem; text-align: left;">
                <div style="margin-bottom: 0.8rem;">
                    <strong>A. ATTACK A SIETCH</strong> <span style="font-size: 0.85rem; opacity: 0.8;">(If Harkonnen CP > Sietch Defense)</span>
                    <ol type="1" style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.4rem 0.4rem 1.4rem; border-radius: 4px; margin-top: 0.2rem;">
                        <li>Sietch with <strong>Highest Level</strong> (even if hidden).</li>
                        <li>Largest CP difference.</li>
                        <li>Does NOT require an Ornithopter.</li>
                        <li>Target Sietch.</li>
                    </ol>
                </div>

                <div style="margin-bottom: 0.8rem;">
                    <strong>B. ATTACK A LEGION</strong> <span style="font-size: 0.85rem; opacity: 0.8;">(If Harkonnen CP > Atreides CP)</span>
                    <ul style="margin-top: 0.2rem; padding-left: 1.2rem;">
                        <li>🚫 <strong>No Ornithopters</strong> to attack legions.</li>
                    </ul>
                    <ol type="1" style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.4rem 0.4rem 1.4rem; border-radius: 4px; margin-top: 0.2rem;">
                        <li>Legion with <strong>Highest CP</strong>.</li>
                        <li>Contains Renowned Leader.</li>
                    </ol>
                </div>

                <div style="margin-bottom: 0.8rem;">
                    <strong>C. MOVE LEGIONS</strong> <span style="font-size: 0.85rem; opacity: 0.8;">(If cannot attack)</span>
                    <ul style="padding-left: 1.2rem; margin-top: 0.2rem;">
                        <li><strong>Objective:</strong> Closest Sietch.</li>
                        <li><strong>Route:</strong> Shortest path (ignoring red borders).</li>
                        <li><strong>Tiebreakers:</strong> Merge > Closeness to Sietch > Defensive Terrain.</li>
                    </ul>
                </div>
            </div>

            <hr style="border-color: var(--color-sand); opacity: 0.3; margin: 1rem 0;">

            <div style="background: rgba(138, 0, 0, 0.15); border: 1px solid var(--color-harkonnen); padding: 0.8rem; border-radius: 4px; text-align: left;">
                <h4 style="margin-top: 0; color: #ff5252;">⚔️ Combat Power (CP) Calculation</h4>
                <p style="font-size: 0.85rem; margin-bottom: 0.5rem;"><em>Fundamental for deciding whether to attack. Only attacks if CP is STRICTLY HIGHER.</em></p>
                
                <div style="margin-bottom: 0.8rem;">
                    <strong style="color: var(--color-sand);">1. STANDARD FORMULA (Quick)</strong>
                    <ul style="font-size: 0.9rem; margin-top: 0.2rem; padding-left: 1.2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem;">
                        <li><strong>+1</strong> per Unit</li>
                        <li><strong>+1</strong> per Leader</li>
                        <li><strong>+2</strong> per Deployment Token</li>
                    </ul>
                    <div style="font-size: 0.8rem; margin-top: 0.3rem; opacity: 0.8;">* Sietch Level does NOT add here.</div>
                </div>

                <div>
                    <strong style="color: var(--color-sand);">2. TIEBREAKER FORMULA (Detailed)</strong>
                    <ul style="font-size: 0.9rem; margin-top: 0.2rem; padding-left: 1.2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem;">
                        <li><strong>1 pt:</strong> Generic Leader</li>
                        <li><strong>2 pts:</strong> Normal Unit / Renowned Leader</li>
                        <li><strong>3 pts:</strong> Elite Unit</li>
                        <li><strong>4 pts:</strong> Sardaukar / Fedaykin</li>
                    </ul>
                </div>
            </div>
        `;
    }

    getDeploymentInstructions() {
        return `
            <h3>Deployment Action</h3>
            
            <div style="font-size: 0.9rem; text-align: left;">
                <h4 style="margin-bottom: 0.5rem; color: var(--color-sand);">1. WHAT TO DEPLOY?</h4>
                <p style="margin-bottom: 0.5rem;">Deploy indicated Units + <strong>1 Leader</strong>.</p>
                
                <div style="background: rgba(255,255,255,0.05); padding: 0.6rem; border-radius: 4px; margin-bottom: 1rem;">
                    <strong>Leader Hierarchy (Strict Order):</strong>
                    <ol type="1" style="padding-left: 1.2rem; margin-top: 0.3rem;">
                        <li><strong style="color: #ffd700;">Top Priority:</strong> Rabban or Feyd-Rautha.</li>
                        <li><strong>Renowned Leader:</strong> Any other available.</li>
                        <li><strong>Generic Leader:</strong> Bashar.</li>
                    </ol>
                    <div style="font-size: 0.85rem; margin-top: 0.5rem; border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 0.3rem;">
                        <em>* If a Unit is missing: Substitute with one of <strong style="color: #ff9100;">Higher CP</strong> (or lower if none).</em>
                    </div>
                </div>

                <h4 style="margin-bottom: 0.5rem; color: var(--color-sand);">2. WHERE TO DEPLOY?</h4>
                <p style="margin-bottom: 0.3rem;">Find a <strong>Harkonnen Settlement</strong> following this order:</p>
                
                <ol type="A" style="background: rgba(138, 0, 0, 0.1); border: 1px solid var(--color-harkonnen); padding: 0.6rem 0.6rem 0.6rem 1.4rem; border-radius: 4px; margin-bottom: 1rem;">
                    <li style="margin-bottom: 0.4rem;">Where the Legion with <strong>Highest Combat Power</strong> is located.</li>
                    <li>Closest to <strong>Target Sietch</strong>.</li>
                </ol>

                <div style="border-left: 3px solid #ff5252; padding-left: 0.8rem; background: rgba(255, 82, 82, 0.05);">
                    <strong style="color: #ff5252;">⚠️ Stacking Limit:</strong>
                    <p style="margin-top: 0.3rem; font-size: 0.9rem;">
                        If deployment exceeds limits (usually 6 units), excess units go to the <strong>next settlement</strong> in priority order.
                    </p>
                </div>

                <div style="margin-top: 0.8rem; border-left: 3px solid var(--color-spice); padding-left: 0.8rem; background: rgba(193, 98, 0, 0.05);">
                    <strong style="color: var(--color-spice;">⚠️ Missing Miniatures:</strong>
                    <p style="margin-top: 0.3rem; font-size: 0.9rem;">
                        If NO miniatures of the required type remain in reserve:
                    </p>
                    <ol style="margin-top: 0.3rem; padding-left: 1.2rem; font-size: 0.9rem;">
                        <li>Substitute with a unit of <strong>Immediately Higher CP</strong>.</li>
                        <li>If no higher, use one of <strong>Immediately Lower CP</strong>.</li>
                    </ol>
                </div>
            </div>
        `;
    }

    getMentatInstructions() {
        return `
            <h3>Mentat Action</h3>
            
            <div style="font-size: 0.9rem; text-align: left;">
                <div style="background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem;">
                    <strong style="color: var(--color-spice);">1. SELECTION AND DRAW (Alternating)</strong>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem;">
                        <li><strong>Check the discard pile:</strong>
                            <ul style="list-style: none; padding-left: 0; margin-top: 0.2rem;">
                                <li>🦅 Visible Harkonnen -> Draw <strong>Corrino Allies</strong>.</li>
                                <li>⚜️ Visible Corrino -> Draw <strong>House Harkonnen</strong>.</li>
                                <li>🕳️ Empty -> Draw <strong>House Harkonnen</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                    <div style="font-size: 0.85rem; margin-top: 0.5rem; border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 0.3rem;">
                        <em>* Play the card <strong>immediately</strong>.</em>
                    </div>
                </div>

                <div style="margin-bottom: 1rem;">
                    <strong style="color: var(--color-sand);">2. RESOLVING EFFECTS</strong>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem; line-height: 1.5;">
                        <li><strong>Deploy / Move / Attack:</strong> Use Deployment or Leadership rules (Priority Sietch).</li>
                        <li><strong>Place / Replace Units:</strong> Use House rules (Near Target Sietch).</li>
                        <li><strong>Place Vehicles:</strong> Use Placement rules (Harvesters in Harvest Sector).</li>
                        <li><strong>Draw Cards:</strong> ⚠️ <strong>DO NOT play them.</strong> Put them in the <strong>Reinforcements Deck</strong>.</li>
                        <li><strong>Play a Card:</strong> Draw another (alternating) and play NOW.</li>
                    </ul>
                </div>

                <div style="background: rgba(138, 0, 0, 0.1); border-left: 3px solid var(--color-harkonnen); padding: 0.6rem; margin-bottom: 0.8rem;">
                    <strong>📍 Generic Events:</strong>
                    <p style="margin-top: 0.2rem; font-size: 0.9rem;">Resolve as close as possible to the <strong>Target Sietch</strong>.</p>
                </div>

                <div style="background: rgba(40, 40, 40, 0.5); border: 1px solid #777; padding: 0.6rem; border-radius: 4px;">
                    <strong>🚫 Impossible Cards:</strong>
                    <p style="margin-top: 0.2rem; font-size: 0.9rem;">
                        If an effect cannot be fulfilled, <strong>place the card in the Reinforcements Deck</strong> (Fuel for combat).
                    </p>
                </div>
            </div>
        `;
    }

    getHouseInstructions() {
        return `
            <h3>House Action (Harkonnen)</h3>
            
            <div style="font-size: 0.9rem; text-align: left;">
                <div style="border-left: 3px solid #ff5252; padding-left: 0.8rem; background: rgba(255, 82, 82, 0.05); margin-bottom: 1rem;">
                    <strong style="color: #ff5252;">🧛‍♂️ Baron's Note:</strong>
                    <p style="margin-top: 0.3rem; font-size: 0.9rem;">
                        If <strong>Baron Harkonnen</strong> is active (face up), his special abilities take priority over these standard rules.
                    </p>
                </div>

                <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid #ffd700; padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem; text-align: center;">
                    <strong style="color: #ffd700; font-size: 1rem;">⚡ EXECUTE BOTH EFFECTS! ⚡</strong>
                    <p style="margin-top: 0.3rem; font-size: 0.9rem;">(First Replacement, then Vehicles)</p>
                </div>

                <div style="margin-bottom: 1rem;">
                    <strong style="color: var(--color-sand);">1. UNIT REPLACEMENT</strong>
                    <p style="margin-top: 0.2rem; margin-bottom: 0.4rem;">Upgrade troops (Normal -> Elite) in this priority order:</p>
                    <ol type="1" style="background: rgba(255,255,255,0.05); padding: 0.6rem 0.6rem 0.6rem 1.4rem; border-radius: 4px;">
                        <li>Legion closest to <strong>ANY Sietch</strong>.</li>
                        <li>Legion with <strong>Highest CP</strong> (vs an attackable Sietch).</li>
                        <li>Legion closest to <strong>Target Sietch</strong>.</li>
                    </ol>
                </div>

                <div style="margin-bottom: 1rem;">
                    <strong style="color: var(--color-sand);">2. VEHICLE PLACEMENT</strong>
                    <p style="margin-top: 0.2rem; margin-bottom: 0.4rem;">ALWAYS place <strong>1 Harvester</strong> AND <strong>1 Ornithopter</strong>.</p>
                    
                    <ul style="padding-left: 1.2rem; line-height: 1.5;">
                        <li><strong>🚜 Harvester:</strong> Prioritize <strong>Current Harvest Sector</strong> (Empty Deep Desert > Empty Desert).</li>
                        <li><strong>🚁 Ornithopter:</strong> 
                            <ul style="list-style: none; padding-left: 0.5rem; margin-top: 0.2rem; background: rgba(0,0,0,0.2); padding: 0.4rem; border-radius: 4px;">
                                <li>1. Air Zone <strong>2 areas</strong> from a Sietch (to attack).</li>
                                <li>2. Air Zone connected to <strong>Target Sietch Sector</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

// --- UI Manager ---
class UIManager {
    constructor() {
        this.roundDisplay = document.getElementById('round-display');
        this.phaseDisplay = document.getElementById('phase-display');
        this.mainContent = document.getElementById('main-content');
        this.nextBtn = document.getElementById('next-btn');
        this.undoBtn = document.getElementById('undo-btn');
        this.logBtn = document.getElementById('log-btn');
        this.dieControls = document.getElementById('die-controls');
    }

    showDieControls() { if (this.dieControls) this.dieControls.style.display = 'block'; }
    hideDieControls() { if (this.dieControls) this.dieControls.style.display = 'none'; }

    updateRound(round) {
        if (this.roundDisplay) this.roundDisplay.textContent = `Round ${round}`;
    }

    updatePhase(phaseName) {
        if (this.phaseDisplay) this.phaseDisplay.textContent = phaseName;
    }

    showCard(title, content, isAction = false) {
        if (this.mainContent) {
            this.mainContent.innerHTML = `
                <div class="card ${isAction ? 'action-card' : ''}">
                    <h2>${title}</h2>
                    <div class="card-content">${content}</div>
                </div>
            `;
        }
    }

    enableNext(enabled = true) {
        if (this.nextBtn) this.nextBtn.disabled = !enabled;
    }

    enableUndo(enabled = true) {
        if (this.undoBtn) this.undoBtn.disabled = !enabled;
    }
}

// --- Game Engine ---
const PHASES = {
    SETUP: 'Setup',
    START_ROUND: 'Start of Round',
    VEHICLE_PLACEMENT: 'Vehicle Placement',
    ACTION_PHASE: 'Phase 2: Action Resolution',
    DESERT_HAZARDS: 'Desert Hazards',
    SPICE_HARVEST: 'Spice Harvest',
    END_OF_ROUND: 'End of Round'
};

class GameEngine {
    constructor(ui) {
        this.ui = ui;
        this.placementLogic = new PlacementLogic();
        this.actionLogic = new ActionLogic();

        this.round = 1;
        this.phase = PHASES.SETUP;
        this.step = 0;

        this.actionHistory = [];

        // Bind controls
        document.querySelectorAll('.btn-die').forEach(btn => {
            if (btn.dataset.result) {
                btn.addEventListener('click', (e) => this.handleDieInput(e.target.dataset.result));
            }
        });
    }

    startNewGame() {
        this.round = 0;
        this.actionHistory = []; // Reset history
        this.phase = PHASES.START_ROUND;
        this.step = 0;
        this.ui.updateRound(this.round);
        this.nextStep();
    }

    nextStep() {
        this.ui.updatePhase(this.phase);
        this.ui.hideDieControls();
        this.ui.enableNext(true);

        switch (this.phase) {
            case PHASES.START_ROUND:
                this.handleStartRound();
                break;
            case PHASES.VEHICLE_PLACEMENT:
                this.handleVehiclePlacement();
                break;
            case PHASES.ACTION_PHASE:
                this.handleActionPhase();
                break;
            case PHASES.DESERT_HAZARDS:
                this.handleDesertHazards();
                break;
            case PHASES.SPICE_HARVEST:
                this.handleSpiceHarvest();
                break;
            case PHASES.END_OF_ROUND:
                this.handleEndOfRound();
                break;
        }
    }

    handleStartRound() {
        if (this.step === 0) {
            this.round++;
            this.ui.updateRound(this.round);

            this.ui.showCard("Start of Round", `
                <ul>
                    <li>Shuffle the Tactics Deck.</li>
                    <li>Draw and reveal <strong>2 Prescience Cards</strong>.</li>
                </ul>
            `);
            this.step++;
        } else if (this.step === 1) {
            this.ui.showCard("Harvest Sector", `
                <p>Draw 1 Tactics Card from the Tactics Deck.</p>
                <p>This card indicates the <strong>Harvest Sector</strong>.</p>
            `);
            this.step++;
        } else if (this.step === 2) {
            this.ui.showCard("Target Sietch", `
                <p>Draw the next Tactics Card.</p>
                <p>This card indicates the <strong>Target Sietch</strong>.</p>
                <p><em>(If the Sector matches the Harvest Sector or the Sietch is destroyed, discard it and draw another).</em></p>
            `);
            this.step++;
        } else if (this.step === 3) {
            this.ui.showCard("Reinforcements", `
                <p>Draw 1 Corrino Allies card and 1 House Harkonnen card.</p>
                <p>Place them <strong>face down</strong> on the Reinforcements Deck.</p>
            `);
            this.step++;
        } else if (this.step === 4) {
            this.ui.showCard("Vehicle Availability", `
                <img src="assets/harvester.jpg" class="hero-image" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid var(--color-spice); margin-bottom: 1rem;">
                <div style="background: rgba(255, 145, 0, 0.1); border: 1px solid var(--color-spice); padding: 0.8rem; border-radius: 4px; text-align: center;">
                    <p>Before placing vehicles, check the board:</p>
                    <h3 style="color: var(--color-spice); margin: 0.5rem 0;">"The Spice Must Flow"</h3>
                    <p>This determines how many Harvesters, Carryalls, and Ornithopters are available.</p>
                </div>
            `);
            this.phase = PHASES.VEHICLE_PLACEMENT;
            this.step = 0;
        }
    }

    handleVehiclePlacement() {
        // Enforce Mahdi Mode: Unify all vehicle placement instructions in one screen
        const harvesters = this.placementLogic.getHarvesterInstructions();
        const carryalls = this.placementLogic.getCarryallInstructions();
        const ornithopters = this.placementLogic.getOrnithopterInstructions();

        const unitedContent = `
            <div style="text-align: left; font-size: 0.9rem;">
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem; margin-bottom: 0.5rem;">🚜 Harvesters</h4>
                    <div>${harvesters}</div>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem; margin-bottom: 0.5rem;">🚁 Carryalls</h4>
                    <div>${carryalls}</div>
                </div>

                <div>
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem; margin-bottom: 0.5rem;">👁️ Ornithopters</h4>
                    <div>${ornithopters}</div>
                </div>
            </div>
        `;

        this.ui.showCard("Vehicle Placement", unitedContent);

        // Advance phase immediately for the next click
        this.phase = PHASES.ACTION_PHASE;
        this.step = 0;

        this.ui.updatePhase(this.phase);
    }

    handleActionPhase() {
        this.ui.showCard("Phase 2: Action Resolution", `
            <p>It is your turn. Perform your actions.</p>
            <p>When your turn ends, roll <strong>1 Harkonnen Action Die</strong> and select the result below. <strong>PRIORITY</strong> must always be given to the <strong style="color: #ff5252;">Special Action</strong> (text in red) of active Renowned Leaders.</p>
        `);
        this.ui.showDieControls();
        this.ui.enableNext(false);
    }

    handleDieInput(result) {
        // Check for 3 consecutive repeats
        const len = this.actionHistory.length;
        if (len >= 3) {
            const last1 = this.actionHistory[len - 1];
            const last2 = this.actionHistory[len - 2];
            const last3 = this.actionHistory[len - 3];

            if (last1 === result && last2 === result && last3 === result) {
                alert("The Automa cannot repeat the same action more than 3 times in a row! Roll the die again.");
                return; // Do not proceed
            }
        }

        this.actionHistory.push(result);

        let instructions = "";
        switch (result) {
            case 'leadership':
            case 'strategy':
                instructions = this.actionLogic.getLeadershipStrategyInstructions();
                break;
            case 'deployment':
                instructions = this.actionLogic.getDeploymentInstructions();
                break;
            case 'mentat':
                instructions = this.actionLogic.getMentatInstructions();
                break;
            case 'house':
                instructions = this.actionLogic.getHouseInstructions();
                break;
        }

        this.ui.showCard(`Action: ${result.toUpperCase()}`, instructions, true);
        this.ui.hideDieControls();
        this.ui.enableNext(true);
    }

    endRound() {
        this.phase = PHASES.DESERT_HAZARDS;
        this.step = 0;
        this.nextStep();
    }

    handleDesertHazards() {
        this.ui.showCard("Phase 3: Desert Hazards (Atreides)", `
            <h3>Wormsigns</h3>
            <ol style="font-size: 0.95rem; text-align: left; padding-left: 1.2rem;">
                <li><strong>Discard</strong> tokens in Areas with Atreides or Worms. Shuffle the pool.</li>
                <li><strong>Place</strong> 1 token (random) in each <strong>Desert</strong> with Harkonnen Legion/Harvester (if no token/Worm already).</li>
                <li><strong>Resolve</strong> the tokens:
                    <ul style="margin-top:0.3rem; background: rgba(0,0,0,0.3); padding:0.5rem; border-radius:4px; list-style:none;">
                        <li>🟫 <strong>Sand:</strong> Discard token.</li>
                        <li>🐛 <strong>Worm:</strong> Place Worm. Discard token.</li>
                        <li>🏜️ <strong>Worm (Buried):</strong> If <em>Deep Desert</em>, place Worm. If not, discard.</li>
                    </ul>
                </li>
                <li><strong>Worm Effect:</strong>
                    <ul style="margin-top:0.3rem;">
                        <li><strong>Harvester:</strong> Remove it (unless using Carryall).</li>
                        <li><strong>Legion:</strong> Must retreat. If cannot, Worm attacks. <br><em style="font-size:0.85em">(If Harvester+Legion and Legion retreats, Harvester is also removed unless Carryall).</em></li>
                    </ul>
                </li>
            </ol>

            <div style="margin: 0.8rem 0; padding: 0.6rem; border-left: 3px solid var(--color-sand); background: rgba(212, 180, 131, 0.08); text-align: left; font-size: 0.9rem;">
                <strong>🚁 Carryall Rescue:</strong><br>
                You may use 1 Carryall (from connected Zone) to save a Harvester.
            </div>

            <h3>Coriolis Storms</h3>
            <div style="text-align: left; font-size: 0.95rem;">
                <p><strong>Vulnerable:</strong> Desert, Deep Desert, Minor Erg, Plateau.</p>
                <p><em>(Exception: The 5 Central Plateau areas surrounded by mountains).</em></p>
                
                <p style="margin-top:0.5rem;"><strong>Resolution:</strong> Roll <strong>2 dice</strong> for each Harkonnen Legion in vulnerable area.</p>
                <ul style="margin-bottom: 0.5rem;">
                    <li>1 Hit for each <span style="color: #ff9100;">⚔️</span> (or equivalent).</li>
                    <li>Hit variable for each ❄️:</li>
                </ul>
                <table style="width:100%; font-size:0.9rem; border-collapse: collapse; background: rgba(255,255,255,0.05); border-radius: 4px;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding:6px; font-weight:bold;">Deep Desert</td>
                        <td style="padding:6px; text-align:right; color: #ff5252;">2 hits</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding:6px; font-weight:bold;">Desert</td>
                        <td style="padding:6px; text-align:right; color: #ffab40;">1 hit</td>
                    </tr>
                    <tr>
                        <td style="padding:6px; font-weight:bold;">Minor Erg / Plateau</td>
                        <td style="padding:6px; text-align:right; color: #69f0ae;">0 hits</td>
                    </tr>
                </table>
                <p style="font-size: 0.8em; margin-top: 5px; opacity: 0.8;"><em>(Apply hits according to Combat Criteria)</em></p>
            </div>
        `);
        this.phase = PHASES.SPICE_HARVEST;
    }

    handleSpiceHarvest() {
        this.ui.showCard("Phase 4: Spice Harvest (Harkonnen)", `
            <div style="text-align: left; font-size: 0.9rem;">
                <!-- 1. CARRYALL -->
                <div style="margin-bottom: 1rem; border-left: 3px solid #ff9100; padding-left: 0.8rem; background: rgba(255, 145, 0, 0.05);">
                    <strong style="color: #ffb74d;">🚁 Carryall Priority:</strong>
                    <p style="font-size: 0.9rem; margin-top: 0.3rem;">
                        If you must decide which Harvester to save with a Carryall: 
                        <strong>ALWAYS prioritize Deep Desert</strong> (2 Spice).
                    </p>
                </div>

                <!-- 2. HARVEST -->
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem;">1. HARVEST</h4>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem;">
                        <li>Remove Harvesters and add Spice + Reserve.</li>
                    </ul>
                    <table style="width:100%; margin: 0.5rem 0; background: rgba(255,255,255,0.05); border-radius: 4px; border-collapse: collapse; font-size: 0.85rem;">
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding:4px 8px;">Desert</td>
                            <td style="padding:4px 8px; text-align:right; font-weight:bold; color: var(--color-spice);">1 point</td>
                        </tr>
                        <tr>
                            <td style="padding:4px 8px;">Deep Desert</td>
                            <td style="padding:4px 8px; text-align:right; font-weight:bold; color: var(--color-spice);">2 points</td>
                        </tr>
                    </table>
                </div>

                <!-- 3. MANDATORY SPENDING -->
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem;">2. MANDATORY SPENDING (Algorithm)</h4>
                    <p style="font-size: 0.85em; opacity: 0.8; margin-bottom: 0.5rem;">Follow this strict priority order:</p>
                    
                    <div style="margin-bottom: 0.8rem;">
                        <strong style="color: #ff5252;">PRIORITY A (Avoid Anger):</strong>
                        <ul style="margin-top: 0.2rem; padding-left: 1.2rem; list-style: circle;">
                            <li>Spend to <strong>MAINTAIN</strong> position.</li>
                            <li>Prioritize lowest markers.</li>
                            <li><strong>Cost:</strong> 2 Spice / marker.</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 0.8rem;">
                        <strong style="color: #69f0ae;">PRIORITY B (Improve Relation):</strong>
                        <ul style="margin-top: 0.2rem; padding-left: 1.2rem; list-style: circle;">
                            <li>If excess, spend to <strong>ADVANCE</strong> 1 step.</li>
                            <li>Starting with lowest markers.</li>
                            <li><strong>Cost:</strong> 3 Spice / marker (Max 1 advance per type).</li>
                        </ul>
                    </div>
                </div>

                <!-- 4. SUPREMACY AND RESERVE -->
                <div style="background: rgba(0,0,0,0.2); padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem;">
                    <h4 style="color: var(--color-spice); margin-bottom: 0.1rem; font-size: 0.95rem;">💎 Supremacy and Reserve</h4>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem; line-height: 1.4;">
                        <li><strong>DOES NOT use "Spice Hoarding".</strong></li>
                        <li><strong>Gain +1 Supremacy IF:</strong> 
                            <ul style="padding-left: 1rem; list-style: square; color: #ffd700;">
                                <li>All markers are at Max.</li>
                                <li>HAS excess spice to maintain all.</li>
                            </ul>
                        </li>
                        <li style="margin-top: 0.4rem;"><strong>Reserve:</strong> Saves only what it <strong>impossibily</strong> could not spend.</li>
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 0.5rem; border-top: 1px solid rgba(193, 98, 0, 0.3); padding-top: 0.3rem; font-size: 0.85rem; text-align: center; font-style: italic;">
                If 1 marker doesn't advance or maintain, <strong>it drops 1 step</strong>.
            </div>
        `);
        this.phase = PHASES.END_OF_ROUND;
    }

    handleEndOfRound() {
        this.ui.showCard("Phase 5: End of Round (The Clock)", `
            <div style="text-align: left; font-size: 0.9rem;">
                
                <!-- 1. ATREIDES MAINTENANCE -->
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: #4fc3f7; border-bottom: 1px solid rgba(79, 195, 247, 0.3); padding-bottom: 0.2rem;">1. YOUR MAINTENANCE (Atreides)</h4>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem; color: #e0f7fa;">
                        <li><strong>Victory:</strong> Do you meet your Secret Objective?</li>
                        <li><strong>Cleanup:</strong> Remove ALL Ornithopters and Carryalls.</li>
                        <li><strong>Leaders:</strong> Recover exhausted leaders (except Tank).</li>
                        <li><strong>Hand:</strong> Discard down to max <strong>6 cards</strong>.</li>
                        <li><strong>Prescience:</strong> Manage unclaimed revealed cards.</li>
                    </ul>
                </div>

                <!-- 2. MAHDI STEPS -->
                <div style="margin-bottom: 1rem; background: rgba(255, 82, 82, 0.05); padding: 0.6rem; border-radius: 4px; border: 1px solid rgba(255, 82, 82, 0.2);">
                    <h4 style="color: #ff5252; margin-bottom: 0.4rem;">2. THE CLOCK (Mahdi Steps)</h4>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.4rem;">
                            <strong>👑 INERTIA (+1 Supremacy):</strong><br>
                            Advance Harkonnen Supremacy marker 1 step. 
                            <em style="opacity: 0.7; font-size: 0.85em;">(Happens ALWAYS).</em>
                        </li>
                        <li>
                            <strong>🔄 TACTICAL RESET:</strong><br>
                            Shuffle the <strong>8 Tactics cards</strong> to form a new deck.
                        </li>
                    </ul>
                </div>

                <!-- 3. PROHIBITIONS -->
                <div style="border-left: 3px solid #ffd700; padding-left: 0.8rem; background: rgba(255, 215, 0, 0.05);">
                    <strong style="color: #ffd700;">🚫 MAHDI RESTRICTIONS:</strong>
                    <ul style="margin-top: 0.3rem; padding-left: 1.2rem; font-size: 0.9em;">
                        <li style="margin-bottom: 0.3rem;"><strong>Reinforcements Deck:</strong> NEVER discard cards from this deck (they accumulate).</li>
                        <li><strong>Renowned Leaders:</strong> NEVER replace them if they are on the board.</li>
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 2rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
                <p style="margin-bottom: 0.5rem; color: var(--color-sand); font-size: 0.9rem;">To start the <strong>New Round</strong>:</p>
                <div style="display: inline-block; padding: 0.5rem 1rem; border: 1px solid var(--color-spice); border-radius: 4px; color: var(--color-spice); font-weight: bold; background: rgba(193, 98, 0, 0.1);">
                    PRESS "NEXT" ⬇️
                </div>
            </div>
            
            <div style="margin-top: 1rem; text-align: center;">
                <button onclick="window.close()" class="btn-secondary" style="border-color: #ff4444; color: #ff4444; font-size: 0.9rem; padding: 0.6rem 1.2rem; opacity: 0.9; width: 100%;">
                    🚫 Close / End Game
                </button>
            </div>
        `);
        this.phase = PHASES.START_ROUND;
        this.step = 0;
    }

    handleCombat() {
        this.ui.hideDieControls();
        this.ui.enableNext(false); // Disable main next button while in combat view

        this.ui.showCard("⚔️ Combat Resolution", `
            <div style="text-align: left; font-size: 0.9rem;">
                
                <!-- 1. PREPARATION -->
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem;">1. PREPARATION (Rule of 6 Dice)</h4>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;"><strong>Reinforcements Deck WITH cards:</strong><br>
                            Automa DISCARDS cards until it can roll <strong>6 DICE</strong> (Maximum).</li>
                        <li><strong>Reinforcements Deck EMPTY:</strong><br>
                            Roll only available Units' dice.</li>
                    </ul>
                </div>

                <!-- 2. TAKING DAMAGE -->
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem;">2. TAKING DAMAGE (Strict Priority)</h4>
                    <p style="font-size: 0.85em; opacity: 0.8; margin-bottom: 0.3rem;">Must remove in this order to protect its core:</p>
                    <ol type="1" style="background: rgba(138, 0, 0, 0.1); padding: 0.6rem 0.6rem 0.6rem 1.4rem; border-radius: 4px; border: 1px solid var(--color-harkonnen);">
                        <li><strong>Leaders (Cannon Fodder):</strong> Eliminate Bashar first. <br><em>(Try to leave 1 Renowned Leader at the end).</em></li>
                        <li><strong>Downgrade Elites:</strong> Elite -> Normal.</li>
                        <li><strong>Downgrade Sardaukar:</strong> Sardaukar -> Normal.</li>
                        <li><strong>Eliminate Troops:</strong> Eliminate Normal Units.</li>
                    </ol>
                    <div style="margin-top: 0.4rem; font-size: 0.85rem; color: #ff9100; font-style: italic;">
                        ⚠️ <strong>Critical Exception:</strong> If removing a unit leaves the Leader ALONE in the area, eliminate the Leader BEFORE the last unit!
                    </div>
                </div>

                <!-- 3. DECISION -->
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem;">3. TACTICAL DECISIONS</h4>
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;"><strong style="color: #ff5252;">NEVER RETREATS:</strong> Fights until win, die, or cease.</li>
                        <li style="margin-bottom: 0.3rem;"><strong>RELENTLESS SIEGE:</strong> Does not take automatic damage for "Continuing" against Sietches.</li>
                        <li><strong>CEASE ATTACK?</strong> Only if:
                            <div style="text-align: center; margin: 0.4rem 0; font-weight: bold; background: rgba(255,255,255,0.05); padding: 0.3rem; border-radius: 4px;">
                                Harkonnen CP &le; (Atreides CP / 2)
                            </div>
                        </li>
                    </ul>
                </div>

                 <!-- CP CALCULATION -->
                <div style="background: rgba(255, 215, 0, 0.05); padding: 0.6rem; border-radius: 4px; font-size: 0.85rem; margin-bottom: 1rem;">
                    <strong>🧮 CP Calculation:</strong><br>
                    1 pt: Generic Leader<br>
                    2 pts: Renowned Leader / Normal Unit<br>
                    3 pts: Elite Unit<br>
                    4 pts: Sardaukar / Fedaykin
                </div>

                <!-- 4. ATREIDES RETREAT -->
                <div>
                     <h4 style="color: var(--color-sand); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.2rem;">4. ATREIDES RETREAT</h4>
                     <p>You choose destination. <strong>Priority:</strong> Empty areas.</p>
                </div>

            </div>
            
            <button id="back-to-action-btn" class="btn-primary" style="margin-top: 1.5rem; width: 100%;">Back to Action Phase</button>
        `);

        // Add listener for the temporary back button
        setTimeout(() => {
            const backBtn = document.getElementById('back-to-action-btn');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    this.handleActionPhase();
                });
            }
        }, 0);
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UIManager();
    const game = new GameEngine(ui);

    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            game.startNewGame();
        });
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            game.nextStep();
        });
    }

    const endRoundBtn = document.getElementById('end-round-btn');
    if (endRoundBtn) {
        endRoundBtn.addEventListener('click', () => {
            game.endRound();
        });
    }

    const combatBtn = document.getElementById('combat-btn');
    if (combatBtn) {
        combatBtn.addEventListener('click', () => {
            game.handleCombat();
        });
    }

    const madhiBtn = document.getElementById('madhi-btn');
    const madhiInfo = document.getElementById('madhi-info');
    const actionCard = document.getElementById('action-card');
    const backMadhiBtn = document.getElementById('back-from-madhi-btn');

    if (madhiBtn) {
        madhiBtn.addEventListener('click', () => {
            if (madhiInfo && actionCard) {
                actionCard.style.display = 'none';
                madhiInfo.style.display = 'block';
                // Ensure we scroll to top of info
                document.querySelector('main').scrollTop = 0;
            }
        });
    }

    if (backMadhiBtn) {
        backMadhiBtn.addEventListener('click', () => {
            if (madhiInfo && actionCard) {
                madhiInfo.style.display = 'none';
                actionCard.style.display = 'block';
            }
        });
    }
});
