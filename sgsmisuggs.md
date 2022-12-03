# Suggestions for extra features/safeguards

## Features 

### Sudoswap Trading
Check for sudoswap liquidity pairs

Compare marketplace profits to sudoswap pool profits

Auto sell to sudoswap pool?

### Initial testing:
**When profitable listing is spotted:**

Timestamp when spotted, note price, profits, tax etc

If/when purchased by someone else, timestamp and report back tx hash, gas used, time taken to purchase

Could we have bought it in time?

## Safeguards

### Offer Validation
Check offerer's WETH balance

Check offerer's WETH permissions (if possible)

Check blockchain for any pending transactions on the offer 

### Marked as suspicious?
**If buying from an alternate marketplace**

Is item flagged as suspicious on OpenSea?

    *Yes*

    Confirm valid offer on x2y2, looksrare etc or viable profit margin (50%+ below floor price for quick flipping, must not be high risk)

    *No*
    
    Continue as normal
