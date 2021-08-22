export const html = {
    deliveryParams: function myFunction(index) { 
        return $(`
        <div class="row" id="myselect${index}">
            <div class="col-md-3">
                <div class="form-group" id="params">
                    <select class="form-control">
                        <option value="" disabled selected hidden>Value</option>
                        <option value="startDate">startDate</option>
                        <option value="endDate">endDate</option>
                        <option value="limit">limit</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group" id="checked">
                    <input type="text" class="form-control" placeholder="Value">
                </div>
            </div>
        </div>
        `);
    },

    quoteParams: function myFunction(index) { 
        return $(`
        <div class="row" id="myselect${index}">
            <div class="col-md-3">
                <div class="form-group" id="params">
                    <select class="form-control">
                        <option value="" disabled selected hidden>Value</option>
                        <option value="startDate">startDate</option>
                        <option value="endDate">endDate</option>
                        <option value="status">status</option>
                        <option value="limit">limit</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group" id="checked">
                    <input type="text" class="form-control" placeholder="Value">
                    <select class="form-control" style="display: none;">
                        <option value="" disabled selected hidden>Value</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>
        </div>
        `);
    },

    response: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">201 Created</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
Content-Type: application/json
"data": ${JSON.stringify(bodyResponse,null,'\t')}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    delivery: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">200 OK</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
"data": ${JSON.stringify(bodyResponse.data,null,'\t')}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    quotation: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">201 Created</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
"data": ${JSON.stringify(bodyResponse.data,null,'\t')}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    read: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">200 OK</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">

"data": ${JSON.stringify(bodyResponse.data,null,'\t')}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    deletion: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">200 OK</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
"data": ${JSON.stringify(bodyResponse.message,null,'\t')}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    error: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: red;">${bodyResponse.status}</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
"Error": ${JSON.stringify(bodyResponse.error.message,null,'\t')}
                </code>
            </pre>
                </div>
            </div>
        `);
    },
};
  