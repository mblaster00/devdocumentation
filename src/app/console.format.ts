export const html = {
    fieldWrapper: function myFunction() { 
        return $(`
        <div class="row myselect">
            <div class="col-md-3">
                <div class="form-group">
                    <select class="form-control">
                        <option value="" disabled selected hidden>Name</option>
                        <option value="Authorization">Authorization</option>
                        <option value="Content-Type">Content-Type</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Value">
                </div>
            </div>
        </div>
        `);
    },

    register: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">201 Created</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
Date: ${new Date()}
Content-Type: application/json
{
"data": {
    "_id": ${bodyResponse.data._id}
},
"accessToken": ${bodyResponse.accessToken}
}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    getKey: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: green;">201 Created</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
Date: ${new Date()}
{
"data": {
    "key": ${bodyResponse.key}
}
                </code>
            </pre>
                </div>
            </div>
        `);
    },

    Error: function myFunction(bodyResponse) {
        return $(`
        <div id="httpResponse"><br>
                <h4><b> Response status</b></h4>
                <p style="color: red;">${bodyResponse.status}</p>
                <h4><b> Response content</b></h4>
                <div id="httpRequest" style="min-width: 75%;box-sizing: border-box;padding: 6px 12px;border: 1px solid #ccc;">
                <pre data-bind="selectAll: { on: 'dblclick' }" title="Double click to select all.">
                <code data-bind="text: requestSummary" title="Double click to select all.">
"Message": ${bodyResponse.error.error}
                </code>
            </pre>
                </div>
            </div>
        `);
    },







};
  