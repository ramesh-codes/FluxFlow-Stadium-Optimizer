# FluxFlow - AI-Driven Stadium Synchronizer

## 1. Chosen Vertical
**Physical Event Experience**

## 2. Approach and Logic
FluxFlow addresses crowd bottlenecks at large-scale sporting venues by acting as a "Dynamic Traffic Controller." Instead of passive monitoring, it actively balances attendee flow by comparing real-time congestion against safety thresholds.

**Core Logic:**
- **Threshold Detection:** The engine monitors `congestionScore` (0.0 to 1.0). If a zone exceeds **0.70**, it is flagged as a bottleneck.
- **Dynamic Re-routing:** The assistant automatically calculates the nearest alternative (Gate or Concession) with the lowest heat level.
- **Incentivization:** It provides a "Benefit" metric (Time Saved) to nudge user behavior toward safer, faster routes.

## 3. How the Solution Works
1. **Request:** The system receives a user's intended location via a RESTful API.
2. **Analysis:** It cross-references the live `venueData.js` state.
3. **Response:** It returns a JSON object containing a `RE-ROUTE` or `PROCEED` status, along with specific actionable instructions and time-saving metrics.

## 4. Google Services Integration
- **Google Cloud Run:** The engine is deployed as a serverless microservice, ensuring it can scale to handle 100,000+ attendees during peak entry/exit times.
- **Google Cloud Logging:** All redirection events are logged for post-event safety analysis and crowd-flow auditing.
- **Google Maps Platform (Future Ready):** The data structure is designed for seamless integration with the Maps SDK for indoor navigation.

## 5. Assumptions
- Real-time density data is available via venue Wi-Fi or sensor telemetry.
- Attendees have internet connectivity via the stadium's public network.
🚀 Live Demo: https://fluxflow-service-813091932909.us-central1.run.app/
